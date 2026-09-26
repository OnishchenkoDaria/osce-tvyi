import { Section } from './layout/Section'
import { Container } from './layout/Container'
import { formatCards } from './data/content'
import { TornEdge } from './layout/TornEdge'

import yellow from '../assets/flags/yellow.png'
import green from '../assets/flags/green.png'
import blue from '../assets/flags/blue.png'
import tornTop from '../assets/torn-top.svg'
import tornBottom from '../assets/torn-bottom.svg'
import heroBackground from "../assets/hero-bg.png";

const iconMap: Record<string, string> = {
    yellow, green, blue
}

export function FormatsSection({id}:{id: string}) {
    return (
        <Section
            id={id}
            className="relative overflow-hidden bg-brand-blue bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            <TornEdge src={tornTop} position="top" />
            <TornEdge src={tornBottom} position="bottom" />

            <Container>
                <div className="relative z-10 pt-24 pb-12 md:pt-40 md:pb-16">
                    <h2 className="text-center text-[48px] font-heading font-extrabold text-white">
                        Формати роботи
                    </h2>

                    <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                        {formatCards.map((card) => {
                            const iconSrc = iconMap[card.icon]
                            return (
                                <div
                                    key={card.title}
                                    className="mx-auto w-full max-w-100 flex items-center gap-4 rounded-2xl bg-white p-4 text-left md:flex-col md:items-center md:p-6 md:text-center"
                                >
                                    <img
                                        src={iconSrc}
                                        alt=""
                                        aria-hidden="true"
                                        className="h-13 w-10 shrink-0 md:h-15 md:w-12"
                                    />
                                    <div>
                                        <h3 className="font-ubuntu font-bold text-brand-navy">
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

                <p className="mt-10 text-center text-sm text-brand-blue-light">
                    *участь в усіх форматах є безоплатною для відвідувачів простору
                </p>
            </Container>
        </Section>
    )
}