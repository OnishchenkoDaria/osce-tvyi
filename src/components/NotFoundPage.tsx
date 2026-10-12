import { useEffect } from 'react'
import logo from '../assets/logos/tviy-logo.png'

export function NotFoundPage() {
    useEffect(() => {
        const previousTitle = document.title
        document.title = 'Сторінку не знайдено — Простори підтримки «Твій»'

        const meta = document.createElement('meta')
        meta.name = 'robots'
        meta.content = 'noindex'
        document.head.appendChild(meta)

        return () => {
            document.title = previousTitle
            meta.remove()
        }
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-brand-violet-gray px-4 text-center text-brand-navy">
            <a href={import.meta.env.BASE_URL} aria-label="На головну">
                <img src={logo} alt="Твій" className="mb-10 h-10 w-auto md:h-12" />
            </a>

            <p className="font-ubuntu text-[96px] font-bold leading-none text-brand-blue md:text-[128px]" aria-hidden="true">
                404
            </p>
            <h1 className="mt-4 font-ubuntu text-2xl font-bold md:text-3xl">
                Сторінку не знайдено
            </h1>
            <p className="mt-3 max-w-md text-base text-brand-gray md:text-lg">
                Можливо, адресу введено з помилкою або сторінку було переміщено.
            </p>

            <a
                href={import.meta.env.BASE_URL}
                className="mt-8 rounded-lg bg-brand-blue px-8 py-3 font-ubuntu text-base font-medium text-white transition-colors hover:bg-brand-blue-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-dark"
            >
                Повернутися на головну
            </a>
        </main>
    )
}
