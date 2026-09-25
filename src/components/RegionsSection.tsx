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