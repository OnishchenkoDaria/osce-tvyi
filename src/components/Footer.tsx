import { Instagram, Facebook } from '@mynaui/icons-react'
import { Container } from './layout/Container'
import logo from '../assets/logos/tviy-logo-white.png'

export function Footer() {
    return (
        <footer className="bg-brand-blue py-12 text-white md:py-16">
            <Container>
                <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:items-start md:gap-8">

                    <p className="order-1 text-sm leading-relaxed text-white/80 md:order-none md:col-start-2">
                        <a href="#" className="underline">
                            Програма Підтримки ОБСЄ для України
                        </a>{' '}
                        не відповідає за точність і повноту інформації, наведені настанови,
                        поради чи друкарські помилки. Викладені погляди, думки, інтерпретації
                        та висновки належать авторам та іншим особам, які брали участь у
                        розробці, й можуть не співпадати з офіційною політикою або позицією
                        Програми Підтримки ОБСЄ для України.
                    </p>

                    <div className="order-2 md:order-none md:col-start-1 md:row-start-1">
                        <h3 className="font-heading text-xl font-extrabold">Контакти</h3>
                        <p className="mt-4 text-sm text-white/80">
                            З усіх додаткових питань можна комунікувати за електронною адресою:
                        </p>
                        <a
                            href="mailto:tvly.osce.nsss@gmail.com"
                            className="mt-4 inline-block font-bold underline"
                        >
                            tvly.osce.nsss@gmail.com
                        </a>
                </div>

                <div className="order-3 flex items-center justify-center gap-4 md:order-none md:col-start-3 md:row-start-1 md:justify-end">
                    <img src={logo} alt="Твій" className="h-10 w-auto" />
                    <a href="#" aria-label="Instagram" className="text-white hover:text-white/80">
                        <Instagram className="h-8 w-8" />
                    </a>
                    <a href="#" aria-label="Facebook" className="text-white hover:text-white/80">
                        <Facebook className="h-8 w-8" />
                    </a>
                </div>

            </div>

            <div className="mt-10 border-t border-white/20 pt-6 text-center md:mt-12">
                <p className="text-sm text-white/60">© 2026</p>
            </div>
        </Container>
</footer>
)
}