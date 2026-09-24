import { useEffect, useState } from 'react'

export function useScrollSpy(ids: string[], offset = 0) {
    const [activeId, setActiveId] = useState<string | null>(null)

    useEffect(() => {
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        const observer = new IntersectionObserver(
            (entries) => {
                // pick the entry most in view near the top
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

                if (visible[0]) setActiveId(visible[0].target.id)
            },
            {
                // top margin accounts for the sticky header; trigger when section
                // reaches ~upper third of viewport
                rootMargin: `-${offset}px 0px -60% 0px`,
                threshold: 0,
            }
        )

        elements.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [ids, offset])

    return activeId
}