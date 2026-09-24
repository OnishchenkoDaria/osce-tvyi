import { Section } from './layout/Section'
import { Container } from './layout/Container'
import { supportTypes } from './data/content'
import { ArrowUpRight } from '@mynaui/icons-react'

import childPhoto from '../assets/child-photo.jpg'
import flower from '../assets/images/flower-blue.png'

// support-type icons (swap to your real files)
import materials from '../assets/icons/supplies.svg'
import finance from '../assets/icons/money.svg'
import space from '../assets/icons/bag.svg'
import format from '../assets/icons/idea.svg'


import osce from '../assets/logos/osce.png'
import nsss from '../assets/logos/nsss.png'
import podorozhnyk from '../assets/logos/podorozhnyk.svg'
import grono from '../assets/logos/grono.png'
import bushe from '../assets/logos/bushe.png'
import bobsnail from '../assets/logos/snail-bob.png'
import rubryka from '../assets/logos/rubryka.png'

const supportIconMap: Record<string, string> = {
    materials, finance, space, format,
}

const partnerLogos = [osce, nsss, podorozhnyk, grono, bushe, bobsnail, rubryka]

export function PartnersSection({id}:{id: string}) {
    return (
        <>
            {/*partner CTA & support types */}
            <Section id={id} className="relative overflow-hidden bg-brand-blue">
                <Container>
                    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
                        <div>
                            <h2 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
                                Ставайте партнерами
                                <br />
                                просторів "Твій"
                            </h2>

                            <p className="mt-4 text-sm font-bold uppercase tracking-wide text-white/70">
                                Підтримка
                            </p>

                            <div className="mt-4 space-y-4 text-sm text-white/90">
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
                                className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-red-500"
                            >
                                Стати партнером
                                <ArrowUpRight className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Photo column */}
                        <div className="flex justify-center">
                            <img
                                src={childPhoto}
                                alt="Дитина малює у просторі «Твій»"
                                className="aspect-square w-64 rounded-full object-cover md:w-80 lg:w-96"
                            />
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-6 md:mt-16 md:grid-cols-4">
                        {supportTypes.map((item) => (
                            <div key={item.label} className="flex flex-col items-center gap-3 text-center">
                                <img
                                    src={supportIconMap[item.icon]}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-10 w-10"
                                />
                                <span className="text-sm font-semibold text-white">
                  {item.label}
                </span>
                            </div>
                        ))}
                    </div>
                </Container>
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