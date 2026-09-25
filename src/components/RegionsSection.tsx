import { useState } from 'react'
import { Section } from './layout/Section.tsx'
import { Container } from './layout/Container'
import { RegionsDesktop } from './RegionsDesktop.tsx'
import { RegionsMobile } from './RegionsMobile.tsx'

export function RegionsSection({id}:{id: string}) {
    // null = nothing selected (default map + no address panel)
    const [selectedId, setSelectedId] = useState<string | null>(null)

    return (
        <Section id={id} className="bg-white-neutral">
            <Container>
                <SectionHeading />

                {/* Desktop + tablet view */}
                <div className="hidden md:block">
                    <RegionsDesktop selectedId={selectedId} onSelect={setSelectedId} />
                </div>

                {/* Mobile view */}
                <div className="md:hidden">
                    <RegionsMobile selectedId={selectedId} onSelect={setSelectedId} />
                </div>
            </Container>
        </Section>
    )
}

function SectionHeading() {
    return (
        <div className="mb-8 flex flex-col gap-0 leading-0">
            <div className="flex items-center gap-3">
                <span className="font-heading text-4xl font-extrabold leading-[0.8] text-brand-blue-light">
                    21
                </span>
                <span className="font-heading text-2xl font-extrabold text-brand-navy">
                    ПРОСТІР
                </span>
            </div>

            <div className="flex items-center gap-3 pl-20">
                <span className="font-heading text-4xl font-extrabold leading-[0.8] text-brand-blue-light">
                    6
                 </span>
                <span className="inline-block bg-brand-green px-4 py-1.5 font-heading text-2xl font-extrabold text-white">
                    РЕГІОНІВ УКРАЇНИ
                </span>
            </div>
        </div>
    )
}