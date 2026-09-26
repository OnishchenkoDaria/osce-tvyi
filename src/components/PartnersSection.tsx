import { Section } from './layout/Section'
import { Container } from './layout/Container'
import { supportTypes } from './data/content'
import { ExternalLink } from "@mynaui/icons-react";

import childPhoto from '../assets/child-photo.png'
import flower from '../assets/images/flower-blue.png'

// support-type icons (swap to your real files)
import materials from '../assets/icons/supplies.svg'
import finance from '../assets/icons/finance.svg'
import work from '../assets/icons/work.svg'
import format from '../assets/icons/idea.svg'


import osce from '../assets/logos/osce.png'
import nsss from '../assets/logos/nsss.png'
import podorozhnyk from '../assets/logos/podorozhnyk.svg'
import grono from '../assets/logos/grono.png'
import bushe from '../assets/logos/bushe.png'
import bobsnail from '../assets/logos/snail-bob.png'
import rubryka from '../assets/logos/rubryka.png'
import partnersBackground from "../assets/hero-bg.png";

const supportIconMap: Record<string, string> = {
    materials, finance, work, format,
}

const partnerLogos = [osce, nsss, podorozhnyk, grono, bushe, bobsnail, rubryka]

export function PartnersSection({id}:{id: string}) {
    return (
        <>
            {/*partner CTA & support types */}
            <Section id={id} className="relative overflow-hidden bg-brand-blue pt-8 pb-14">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${partnersBackground})` }}
                    aria-hidden="true"
                />

                <div
                    className="absolute inset-0 bg-brand-blue-light/47"
                    aria-hidden="true"
                />

                <div className="relative z-10">
                    <Container>
                        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
                            <div className="max-w-200">
                                <h2 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-[70px]">
                                    Ставайте партнерами
                                    <br />
                                    просторів <span className="underline underline-offset-8 decoration-dotted decoration-brand-yellow">
                                        "Твій"
                                    </span>
                                </h2>

                                <p className="mt-4 text-lg font-bold uppercase tracking-wide text-brand-blue-dark">
                                    Підтримка
                                </p>

                                <div className="mt-10 space-y-8 text-sm font-semibold text-white">
                                    <p>
                                        Для сталої роботи й розвитку мережа просторів постійно залучає
                                        партнерську підтримку. Вона допомагає забезпечувати необхідні
                                        ресурси, розвивати програми та створювати нові можливості для
                                        дітей та родин.
                                    </p>
                                    <p>
                                        Ми відкриті до співпраці з бізнесом, громадськими
                                        організаціями, медіа, експертами, волонтерами та всіма, хто
                                        хоче долучитися.
                                    </p>
                                    <p>
                                        Партнерство може бути різним: матеріальна чи фінансова
                                        підтримка, спільні проєкти, інформаційні кампанії, експертна
                                        участь, волонтерські ініціативи або інший формат, корисний для
                                        обох сторін.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    className="mt-8 w-full max-w-130 text-lg flex items-center justify-center gap-2 mx-auto rounded-lg bg-brand-red px-8 py-3 font-semibold text-white transition-colors hover:bg-red-500"
                                >
                                    Стати партнером
                                    <ExternalLink className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Photo column */}
                            <div>
                                <img
                                    src={childPhoto}
                                    alt="Дитина малює у просторі «Твій»"
                                    className="aspect-square mx-auto w-auto h-86 md:h-106 lg:h-126"
                                />
                            </div>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-6 md:mt-16 md:grid-cols-4">
                            {supportTypes.map((item) => (
                                <div key={item.label} className="flex items-center gap-3 text-center">
                                    <img
                                        src={supportIconMap[item.icon]}
                                        alt={item.label}
                                        aria-hidden="true"
                                        className="h-10 w-10"
                                    />
                                    <span className="text-sm font-semibold text-brand-blue-bright">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </Section>

            {/* partner logos */}
            <Section className="relative overflow-hidden">
                {/* Purple flower decoration */}
                <img
                    src={flower}
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-0 left-4 w-20 md:w-28 lg:left-16"
                />

                <Container>
                    <h2 className="text-center font-heading text-3xl font-extrabold text-brand-navy md:text-4xl">
                        Наші партнери
                    </h2>

                    {/* Logos reflow */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:mt-12 md:gap-10">
                        {partnerLogos.map((logo, i) => (
                            <img
                                key={i}
                                src={logo}
                                alt="Партнер"
                                className="h-8 w-auto object-contain md:h-10"
                            />
                        ))}
                    </div>
                </Container>
            </Section>
        </>
    )
}