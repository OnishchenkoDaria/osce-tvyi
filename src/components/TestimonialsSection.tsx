import { Section } from './layout/Section'
import { Container } from './layout/Container'
import { testimonials } from './data/content'
import notebook from '../assets/images/notebook-yellow.png'
import quote from "../assets/quote.svg"

export function TestimonialsSection({id}:{id: string}) {
    return (
        <Section id={id} className="relative pt-6 pb-14 ">
            {/* Notebook overlay — tablet/desktop only, decorative */}
            <img
                src={notebook}
                alt=""
                aria-hidden="true"
                className="absolute z-30 right-4 -top-40 hidden w-82 md:block lg:right-16 lg:w-92"
            />

            <Container>
                <h2 className="font-heading text-[48px] font-extrabold leading-10 text-brand-blue-dark">
                    Кожного дня створюємо
                    <br />
                    <span className="underline underline-offset-10 decoration-brand-green decoration-dotted">
                        маленькі дива
                    </span>
                </h2>

                {/* Testimonial cards */}
                <div className="mt-8 flex flex-col gap-4 md:mt-12 md:gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.author}
                            className="rounded-2xl bg-gray-100 p-6 md:p-8"
                        >
                            <div className="border-l-3 px-8 border-brand-blue-dark flex flex-col gap-6">
                                <img
                                    src={quote}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-6"
                                />
                                <p className="text-sm font-ubuntu leading-6 text-brand-blue-dark">
                                    {t.quote}
                                    {t.quoteEmphasis && <i>{t.quoteEmphasis}</i>}
                                </p>
                                <p className="text-xs font-bold text-brand-gray">
                                    {t.author}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}