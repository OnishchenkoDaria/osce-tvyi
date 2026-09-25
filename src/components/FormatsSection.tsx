import { Section } from './layout/Section'
import { Container } from './layout/Container'
import { formatCards } from './data/content'
import { TornEdge } from './layout/TornEdge'

import yellow from '../assets/flags/yellow.png'
import green from '../assets/flags/green.png'
import blue from '../assets/flags/blue.png'
import tornTop from '../assets/torn-top.svg'
import tornBottom from '../assets/torn-bottom.svg'

const iconMap: Record<string, string> = {
    yellow, green, blue
}

export function FormatsSection({id}:{id: string}) {
    return (
        <Section id={id} className="relative overflow-hidden bg-brand-blue">
            <TornEdge src={tornTop} position="top" />
            <TornEdge src={tornBottom} position="bottom" />

            <Container>
                <h2 className="text-center font-heading text-3xl font-extrabold text-white md:text-4xl">
                    Формати роботи
                </h2>

                <div className="relative z-10 py-12 md:py-16">
                    <h2 className="text-center font-heading text-3xl font-extrabold text-white md:text-4xl">
                        Формати роботи
                    </h2>

                    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                        {formatCards.map((card) => {
                            const iconSrc = iconMap[card.icon]
                            return (
                                <div
                                    key={card.title}
                                    className="flex items-center gap-4 rounded-2xl bg-white p-4 text-left md:flex-col md:items-center md:p-6 md:text-center"
                                >
                                    <img
                                        src={iconSrc}
                                        alt=""
                                        aria-hidden="true"
                                        className="h-10 w-10 shrink-0 md:h-12 md:w-12"
                                    />
                                    <div>
                                        <h3 className="font-heading font-bold text-brand-navy">
                                            {card.title}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-600 md:mt-2">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <p className="mt-10 text-center text-sm text-white/80">
                        *участь в усіх форматах є безоплатною для відвідувачів простору
                    </p>
                </div>

                <p className="mt-10 text-center text-sm text-white/80">
                    *участь в усіх форматах є безоплатною для відвідувачів простору
                </p>
            </Container>
        </Section>
    )
}