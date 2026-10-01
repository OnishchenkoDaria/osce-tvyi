import { useState, useEffect } from 'react'
import { X, ChevronDown } from '@mynaui/icons-react'
import { partnershipFormats } from './data/content'
import { useForm, Controller } from 'react-hook-form'
import { Listbox } from '@headlessui/react'
import format from '../assets/icons/idea.svg'

interface Props {
    isOpen: boolean
    onClose: () => void
}

interface FormValues {
    name: string
    email: string
    phone: string
    format: string
    description: string
    botcheck: string
}

const fieldClass =
    'w-full rounded-lg border bg-white px-4 py-2 text-sm text-brand-navy ' +
    'placeholder:text-brand-gray transition-colors ' +
    'focus:outline-none focus:ring-2 focus:ring-brand-blue/30'

function formatLocalPhone(raw: string): string {
    let digits = raw.replace(/\D/g, '')
    if (digits.startsWith('380')) digits = digits.slice(3)
    else if (digits.startsWith('0')) digits = digits.slice(1)
    digits = digits.slice(0, 9)

    const parts = [
        digits.slice(0, 2),
        digits.slice(2, 5),
        digits.slice(5, 7),
        digits.slice(7, 9),
    ].filter(Boolean)

    return parts.join(' ')
}

export function PartnershipModal({ isOpen, onClose }: Props) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        control,
        formState: { errors },
    } = useForm<FormValues>({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
    })

    const handleClose = () => {
        setStatus('idle')
        reset()
        onClose()
    }

    useEffect(() => {
        if (!isOpen) return
        document.body.style.overflow = 'hidden'
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && handleClose()
        window.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKey)
        }
    }, [isOpen])

    async function onSubmit(values: FormValues) {
        if (values.botcheck) return
        setStatus('sending')

        const payload = {
            access_key: import.meta.env.VITE_WEB3FORMS_KEY,
            subject: `Нова заявка на партнерство: ${values.format}`,
            from_name: 'Сайт «Твій»',
            replyto: values.email,
            'Імʼя / Організація': values.name,
            Email: values.email,
            Телефон: values.phone ? `+380 ${values.phone}` : '—',
            'Формат партнерства': values.format,
            Опис: values.description || '—',
        }

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
            })
            const data = await res.json()
            if (data.success) {
                setStatus('success')
                reset()
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    if (!isOpen) return null

    const borderClass = (hasError: boolean) =>
        hasError ? 'border-brand-red focus:border-brand-red' : 'border-brand-blue/50 focus:border-brand-blue'

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/50 p-4 backdrop-blur-sm"
            onClick={handleClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl md:p-8"
            >
                <button
                    type="button"
                    onClick={handleClose}
                    aria-label="Закрити"
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-brand-gray transition-colors hover:bg-brand-blue-light/40 hover:text-brand-blue-light"
                >
                    <X className="h-6 w-6" />
                </button>

                <div className="flex gap-2 items-center">
                    <h3 className="font-ubuntu text-xl font-extrabold text-brand-blue-dark md:text-2xl">
                        Стати партнером
                    </h3>
                    <img
                        src={format}
                        aria-hidden="true"
                        className="h-12 w-12"
                    />
                </div>

                <p className="text-sm text-brand-gray">
                    Залиште заявку на партнерство і ми звʼяжемося з вами найближчим часом.
                </p>

                {status === 'success' ? (
                    <div className="mt-8 rounded-xl bg-brand-green/15 p-6 text-center">
                        <p className="font-ubuntu font-bold text-brand-navy">Дякуємо! Вашу заявку надіслано.</p>
                        {/*<button
                            onClick={handleClose}
                            className="mt-4 rounded-lg bg-brand-blue px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
                        >
                            Закрити
                        </button>*/}
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4" noValidate>
                        {/* honeypot */}
                        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('botcheck')} />

                        {/* Name */}
                        <div>
                            <label className="mb-1 block text-sm font-ubuntu font-semibold text-brand-navy">
                                ПІБ / Назва організації <span className="text-brand-red font-bold">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Іван Іванов / ТОВ «Компанія»"
                                className={`${fieldClass} ${borderClass(!!errors.name)}`}
                                {...register('name', { required: 'Вкажіть імʼя або назву організації' })}
                            />
                            {errors.name && <p className="mt-1 text-xs text-brand-red">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-1 block text-sm font-ubuntu font-semibold text-brand-navy">
                                Електронна пошта <span className="text-brand-red font-bold">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className={`${fieldClass} ${borderClass(!!errors.email)}`}
                                {...register('email', {
                                    required: 'Вкажіть електронну пошту',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: 'Некоректна електронна пошта',
                                    },
                                })}
                            />
                            {errors.email && <p className="mt-1 text-xs text-brand-red">{errors.email.message}</p>}
                        </div>

                        {/* Phone with fixed +380 prefix */}
                        <div>
                            <label className="mb-1 block text-sm font-ubuntu font-semibold text-brand-navy">
                                Телефон
                            </label>
                            <div
                                className={`flex items-center overflow-hidden rounded-lg border border-brand-blue/50 bg-white transition-colors focus-within:ring-2 focus-within:ring-brand-blue/30 ${
                                    errors.phone ? 'border-brand-red' : 'focus-within:border-brand-blue'
                                }`}
                            >
                                <span className="flex select-none items-center gap-1 border-r border-brand-blue-light/50 bg-brand-violet-gray px-3 py-2 text-sm font-semibold text-brand-navy">
                                    +380
                                </span>
                                <input
                                    type="tel"
                                    inputMode="numeric"
                                    placeholder="50 123 45 67"
                                    className="w-full bg-transparent px-4 py-2 text-sm text-brand-navy placeholder:text-brand-gray focus:outline-none"
                                    {...register('phone', {
                                        onChange: (e) => {
                                            setValue('phone', formatLocalPhone(e.target.value), { shouldValidate: false })
                                        },
                                        validate: (v) =>
                                            !v || /^\d{2} \d{3} \d{2} \d{2}$/.test(v) || 'Введіть 9 цифр номера',
                                    })}
                                />
                            </div>
                            {errors.phone && <p className="mt-1 text-xs text-brand-red">{errors.phone.message}</p>}
                        </div>

                        {/* Format — custom Listbox */}
                        <div>
                            <label className="mb-1 block text-sm font-ubuntu font-semibold text-brand-navy">
                                Формат партнерства <span className="text-brand-red font-bold">*</span>
                            </label>
                            <Controller
                                name="format"
                                control={control}
                                rules={{ required: 'Оберіть формат партнерства' }}
                                render={({ field }) => (
                                    <Listbox value={field.value} onChange={field.onChange}>
                                        <div className="relative">
                                            <Listbox.Button
                                                className={`${fieldClass} ${borderClass(!!errors.format)} flex w-full items-center justify-between text-left`}
                                            >
                                                <span className={field.value ? 'text-brand-navy' : 'text-brand-gray'}>
                                                    {field.value || 'Оберіть формат'}
                                                </span>
                                                <ChevronDown className="h-5 w-5 text-brand-gray" />
                                            </Listbox.Button>

                                            <Listbox.Options className="absolute z-10 mt-2 w-full overflow-hidden rounded-lg border border-brand-blue-light/50 bg-white shadow-lg">
                                                {partnershipFormats.map((f) => (
                                                    <Listbox.Option
                                                        key={f}
                                                        value={f}
                                                        className="cursor-pointer px-4 py-3 text-sm text-brand-navy data-[headlessui-state~=active]:bg-brand-blue-light/40 data-[headlessui-state~=active]:text-brand-blue-dark data-[headlessui-state~=selected]:font-semibold data-[headlessui-state~=selected]:text-brand-blue"
                                                    >
                                                        {f}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </div>
                                    </Listbox>
                                )}
                            />
                            {errors.format && <p className="mt-1 text-xs text-brand-red">{errors.format.message}</p>}
                        </div>

                        {/* Description */}
                        <div>
                            <label className="mb-1 block text-sm font-ubuntu font-semibold text-brand-navy">
                                Опис діяльності
                            </label>
                            <textarea
                                rows={4}
                                placeholder="За бажанням, коротко про вашу організацію та як ви хочете долучитися…"
                                className={`${fieldClass} resize-none ${borderClass(!!errors.description)}`}
                                {...register('description')}
                            />
                        </div>

                        {status === 'error' && (
                            <p className="rounded-lg bg-brand-red/10 px-4 py-2 text-sm text-brand-red">
                                Сталася помилка. Спробуйте ще раз.
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="mt-2 w-full rounded-lg bg-brand-red px-8 py-2 font-semibold text-white transition-colors hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {status === 'sending' ? 'Надсилання…' : 'Надіслати заявку'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}