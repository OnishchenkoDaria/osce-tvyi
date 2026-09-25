import {Section} from "./layout/Section.tsx";
import {Container} from "./layout/Container.tsx";
import type {InfoCard} from "../types/content-interfaces.ts";
import {infoCards} from "./data/content.ts";
import community from "../assets/icons/community.svg";
import hands from "../assets/icons/help-hands.svg";
import settings from "../assets/icons/settings.svg";
import safety from "../assets/icons/help-hands.svg";


const iconMap: Record<string, string> = {
    users:community ,
    heart: hands,
    settings: settings,
    shield: safety,
}

export function InfoCards({id}:{id: string}) {
    return(
        <Section id={id} className="bg-white-neutral">
            <Container>
                <div className="px-4 py-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {infoCards.map((card: InfoCard) => {
                        const iconSrc = iconMap[card.icon]
                        return (
                            <div key={card.title} className="w-full rounded-2xl bg-white text-center px-6 pt-4 pb-6 shadow-sm">
                                <div className="flex justify-center">
                                    <img src={iconSrc} className="h-11 w-auto" alt="" aria-hidden="true" />
                                </div>
                                <h3 className="mt-2 font-ubuntu text-lg font-bold text-brand-blue-dark">{card.title}</h3>
                                <p className="mx-4 mt-2 font-heading text-brand-navy leading-[24px]">{card.description}</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}