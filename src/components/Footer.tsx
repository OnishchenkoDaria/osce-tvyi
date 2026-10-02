import { Instagram, Facebook } from '@mynaui/icons-react'
import { Container } from './layout/Container'
import logo from '../assets/logos/tviy-logo-white.png'

export function Footer() {
    return (
        <footer className="bg-brand-blue-dark pb-3 pt-12 text-white md:pt-16">
            <Container>
                <div className="flex flex-col gap-10 md:grid md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10">

                    <p className="order-1 text-[12px] lg:px-12 leading-relaxed text-brand-blue-light/60 text-center md:order-none md:col-start-2">
                        <a href="https://www.osce.org/uk/node/660697" className="underline hover:text-white">
                            Програма Підтримки ОБСЄ для України
                        </a>{' '}
                        не відповідає за точність і повноту інформації, наведені настанови,
                        поради чи друкарські помилки. Викладені погляди, думки, інтерпретації
                        та висновки належать авторам та іншим особам, які брали участь у
                        розробці, й можуть не співпадати з офіційною політикою або позицією
                        Програми Підтримки ОБСЄ для України.
                    </p>

                    <div className="order-2 md:order-none md:col-start-1 md:row-start-1 max-w-85">
                        <h3 className="font-ubuntu underline underline-offset-4 decoration-brand-green decoration-dotted text-xl font-extrabold">Контакти</h3>
                        <p className="mt-4 text-sm text-brand-blue-light">
                            З усіх додаткових питань можна комунікувати за електронною адресою:
                        </p>
                        <a
                            href="mailto:tviy.prostir.osce@gmail.com"
                            className="mt-4 text-xl inline-block font-ubuntu tracking-wider font-bold underline underline-offset-6 decoration-brand-blue hover:text-brand-blue-light hover:decoration-brand-blue-light"
                        >
                            tviy.prostir.osce@gmail.com
                        </a>
                </div>

                    <div className="order-3 flex w-fit flex-row items-center gap-4 md:order-none md:col-start-3 md:flex-col md:items-end md:justify-self-end lg:flex-row lg:items-center">
                        <img src={logo} loading="lazy" alt="Твій" className="h-14 w-auto" />
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/tviy.spaces?stkn=YWFhYW12M3FteWRj" aria-label="Instagram" className="text-white hover:text-white/50">
                                <Instagram size={60} stroke={1.75} fill="#7181E3" />
                            </a>
                            <a
                                href="https://www.facebook.com/share/1DrnmHKGrz/"
                                aria-label="Facebook"
                                className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#7181E3] text-white transition-colors hover:text-white/60"
                            >
                                <Facebook size={50} stroke={0} fill="currentColor" className="absolute top-1" />
                            </a>
                    </div>
                </div>

            </div>

            <div className="mt-10 border-t border-white/20 pt-3 text-center md:mt-12">
                <p className="text-sm text-white/60">© 2026</p>
            </div>
        </Container>
</footer>
)
}