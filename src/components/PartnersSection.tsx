import { Section } from './layout/Section'
import { Container } from './layout/Container'
//import { supportTypes } from './data/content'
import { ExternalLink } from "@mynaui/icons-react";

import childPhoto from '../assets/child-photo.png'
import flower from '../assets/images/flower-blue.png'

// support-type icons (swap to your real files)
/*import materials from '../assets/icons/supplies.svg'
import finance from '../assets/icons/finance.svg'
import work from '../assets/icons/work.svg'
import format from '../assets/icons/idea.svg'*/


import osce from '../assets/logos/osce_dark.png'
import nsss from '../assets/logos/nsss_dark.png'
import podorozhnyk from '../assets/logos/podorozhnyk.svg'
import grono from '../assets/logos/grono.png'
import bushe from '../assets/logos/bushe.png'
import bobsnail from '../assets/logos/snail-bob.png'
import rubryka from '../assets/logos/rubryka.png'
import partnersBackground from "../assets/hero-bg.png";
import {FlagsScrollable} from "./FlagsScrollable.tsx";
import { PartnershipModal } from './PartnershipModal';
import {useState} from "react";

/*const supportIconMap: Record<string, string> = {
    materials, finance, work, format,
}*/

export function PartnersSection({id}:{id: string}) {
    const [isModalOpen, setIsModalOpen] = useState(false)
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
                                <h2 className="font-ubuntu text-3xl font-extrabold leading-tight text-white">
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
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Стати партнером
                                    <ExternalLink className="h-5 w-5" stroke={2.5} />
                                </button>
                            </div>

                            {/* Photo column */}
                            <div>
                                <img
                                    src={childPhoto}
                                    loading="lazy"
                                    alt="Дитина малює у просторі «Твій»"
                                    className="aspect-square mx-auto w-auto h-86 md:h-106 lg:h-126"
                                />
                            </div>
                        </div>

                        {/*<div className="mt-12 grid grid-cols-2 gap-6 md:mt-16 md:grid-cols-4">
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
                            ))
                        </div>*/}
                        <div className="mt-6 place-items-center gap-6 md:mt-10 flex flex-wrap justify-center">
                            <img src={osce} loading="lazy" alt="ОБСЄ" className="h-7 w-auto object-contain md:h-8" />
                            <img src={nsss} loading="lazy" alt="Національна соціальна сервісна служба України" className="h-9 w-auto object-contain md:h-13" />
                            <img src={podorozhnyk} loading="lazy" alt="Мережа аптек Подорожник" className="h-11 w-auto object-contain md:h-14" />
                            <img src={grono} loading="lazy" alt="GRONO" className="h-6 w-auto object-contain md:h-8" />
                            <img src={bushe} loading="lazy" alt="BUSHE" className="h-6 w-auto object-contain md:h-9" />
                            <img src={rubryka} loading="lazy" alt="Рубрика" className="h-6 w-auto object-contain md:h-9" />
                            <img src={bobsnail} loading="lazy" alt="BOB SNAIL" className="h-6 w-auto object-contain md:h-8" />
                        </div>

                    </Container>
                </div>
            </Section>

            {/* partner logos */}
            <Section className="relative pt-18 pb-24 bg-brand-violet-gray">
                <img
                    src={flower}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                    className="absolute z-30 -top-11 md:-top-15 lg:-top-17 md:left-4 w-40 md:w-75 lg:w-85 lg:left-16"
                />

                <Container>
                    <h2 className="text-center font-ubuntu font-semibold text-brand-blue-dark text-2xl">
                        Наші донори
                    </h2>

                    {/* Row 1: OSCE + NSSS (the two official partners)
                    <div className="mt-8 h-auto flex flex-wrap items-center justify-center gap-6 md:mt-12 md:gap-24">
                        <img src={osce} alt="ОБСЄ" className="h-8 w-auto object-contain md:h-14" />
                        <img src={nsss} alt="Національна соціальна сервісна служба України" className="h-11 w-auto object-contain md:h-22" />
                    </div>

                    <div className="mt-6 grid grid-cols-2 place-items-center gap-6 md:mt-10 md:flex md:flex-wrap md:justify-center">
                        <img src={podorozhnyk} alt="Мережа аптек Подорожник" className="h-13 w-auto object-contain md:h-14" />
                        <img src={grono} alt="GRONO" className="h-8 w-auto object-contain md:h-8" />
                        <img src={bushe} alt="BUSHE" className="h-8 w-auto object-contain md:h-9" />
                        <img src={rubryka} alt="Рубрика" className="h-8 w-auto object-contain md:h-9" />
                        <img src={bobsnail} alt="BOB SNAIL" className="col-span-2 h-8 w-auto object-contain md:h-8" />
                    </div>*/}
                    <div className="mt-12">
                        <FlagsScrollable />
                    </div>
                </Container>
            </Section>
            <PartnershipModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}