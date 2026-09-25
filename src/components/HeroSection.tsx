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
        <Section className="relative overflow-hidden bg-brand-blue pt-10 pb-20 px-8 md:px-12 lg:px-16">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroBackground})` }}
                aria-hidden="true"
            />
            <div className="relative z-10">
                <Container>
                    <div className="grid grid-col items-center gap-2 md:grid-cols-[1fr_auto]">

                        <div className="flex flex-col">

                            <div className="grid grid-cols-[1fr_auto] items-center gap-4 md:block">
                                <h1 className="font-ubuntu text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
                                    Простір, де живе дитинство
                                </h1>

                                <img
                                    src={flower}
                                    alt=""
                                    aria-hidden="true"
                                    className="w-27 md:hidden"
                                />
                            </div>

                            <p className="mt-4 max-w-full text-white/90 font-semibold md:mt-6 md:max-w-xl md:text-lg lg:max-w-2xl">
                                «Твій» — це проект, що створений надати психологічну, соціальну й
                                емоційну підтримку дітям, які постраждали від війни. А також
                                допомогти батькам чи опікунам підтримувати дитину вдома.
                            </p>

                            {/* partner logos */}
                            <div className="mt-8 flex h-11 items-center gap-6 md:mt-10 md:h-10">
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
                                className="absolute left-18 -top-4 w-36 -rotate-30 lg:w-38"
                            />
                            <img
                                src={pencil}
                                alt=""
                                aria-hidden="true"
                                className="absolute left-36 -top-4 h-70 lg:h-75"
                            />
                            <img
                                src={flower}
                                alt=""
                                aria-hidden="true"
                                className="absolute left-0 top-28 w-40 lg:w-42"
                            />
                        </div>

                    </div>
                </Container>
            </div>
        </Section>
    )
}