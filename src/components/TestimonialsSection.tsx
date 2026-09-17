import { Section } from './layout/Section'
import { Container } from './layout/Container'
import { testimonials } from './data/content'
import notebook from '../assets/images/notebook-yellow.png'

export function TestimonialsSection() {
    return (
        <Section className="relative overflow-hidden">
            {/* Notebook overlay — tablet/desktop only, decorative */}
            <img
                src={notebook}
                alt=""
                aria-hidden="true"
                className="absolute right-4 top-0 hidden w-32 md:block lg:right-16 lg:w-44"
            />

            <Container>
                <h2 className="font-heading text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl">
                    Кожного дня створюємо
                    <br />
                    <span className="text-brand-green">маленькі дива</span>
                </h2>

                {/* Testimonial cards */}
                <div className="mt-8 flex flex-col gap-4 md:mt-12 md:gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.author}
                            className="rounded-2xl bg-gray-100 p-6 md:p-8"
                        >
                            <span className="font-heading text-4xl leading-none text-brand-blue">
                                &ldquo;
                            </span>
                            <p className="mt-2 text-sm text-brand-navy md:text-base">
                                {t.quote}
                            </p>
                            <p className="mt-4 text-xs font-semibold text-gray-500 md:text-sm">
                                {t.author}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}