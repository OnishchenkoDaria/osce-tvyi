import { Section } from './layout/Section'
import { Container } from './layout/Container'

// visuals
import heroBackground from '../assets/hero-bg.png'
import flower from '../assets/images/flower.png'
import pencil from '../assets/images/pencil.png'
import plane from '../assets/images/plane.png'
import osceLogo from '../assets/logos/osce.png'
import nsssLogo from '../assets/logos/nsss.png'

export function HeroSection() {
    return(
        <Section className="relative overflow-hidden bg-brand-blue pt-10 pb-24 px-8 md:px-12 lg:px-16">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBackground})` }}
                aria-hidden="true"
            />
            <div className="relative z-10">
                <Container>
                    <div className="grid grid-col items-center gap-2 md:grid-cols-[1fr_auto]">

                        <div className="flex flex-col">

                            <div className="grid grid-cols-[1fr_auto] items-center gap-0 md:block">
                                <h1 className="max-w-150 font-ubuntu text-3xl font-extrabold leading-12 lg:leading-14 text-white">
                                    Простір, де живе дитинство
                                </h1>

                                    <img
                                    src={flower}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-25 md:hidden"
                                />
                            </div>

                            <p className="w-full md:w-[90%] lg:max-w-160 text-white font-heading font-semibold leading-7 mt-6 md:mt-8">
                                «Твій» — це проект, що створений надати психологічну, соціальну й
                                емоційну підтримку дітям, які постраждали від війни. А також
                                допомогти батькам чи опікунам підтримувати дитину вдома.
                            </p>

                            {/* partner logos */}
                            <div className="mt-8 flex h-11 items-center gap-6 md:mt-12 md:h-10">
                                <img
                                    src={osceLogo}
                                    alt="OSCE"
                                    className="h-full py-1.5 w-auto object-contain opacity-70"
                                />
                                <img
                                    src={nsssLogo}
                                    alt="Національна соціальна сервісна служба України"
                                    className="h-full w-auto object-contain"
                                />
                            </div>

                        </div>

                        <div className="relative hidden h-full w-72 md:block lg:w-96">
                            <img
                                src={plane}
                                alt=""
                                aria-hidden="true"
                                className="absolute left-16 lg:left-4 -top-8 w-45 -rotate-30 lg:w-48"
                            />
                            <img
                                src={pencil}
                                alt=""
                                aria-hidden="true"
                                className="absolute left-36 -top-4 h-80 lg:h-100"
                            />
                            <img
                                src={flower}
                                alt=""
                                aria-hidden="true"
                                className="absolute -left-8 lg:-left-28 top-32 w-54 lg:w-64"
                            />
                        </div>

                    </div>
                </Container>
            </div>
        </Section>
    )
}