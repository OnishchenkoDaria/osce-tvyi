import { regions, defaultMap } from './data/content.ts'
import { BuildingOne } from "@mynaui/icons-react";
import { SectionHeading } from "./MapHeading.tsx";
import { useState, useEffect } from "react";

interface Props {
    selectedId: string | null
    onSelect: (id: string | null) => void
}

export function RegionsDesktop({ selectedId, onSelect }: Props) {

    useEffect(() => {
        // fetch every map into the browser cache
        ;[defaultMap, ...regions.map(r => r.mapImage)].forEach((src) => {
            const img = new Image()
            img.src = src
        })
    }, [])

    const selected = regions.find((r) => r.id === selectedId) ?? null
    const mapSrc = selected?.mapImage ?? defaultMap

    // the image currently shown as the "base" (bottom) layer
    const [base, setBase] = useState(mapSrc)
    const isTransitioning = mapSrc !== base   // derived, no effect needed

    return (
        <div className="grid grid-cols-2 items-start gap-8">
            {/* LEFT: pills + address panel (unchanged) */}
            <div>
                <SectionHeading />
                <div className="grid grid-cols-2 gap-3">
                    {regions.map((region) => {
                        const isActive = region.id === selectedId
                        return (
                            <button
                                key={region.id}
                                type="button"
                                onClick={() => onSelect(isActive ? null : region.id)}
                                className={`rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition-colors ${
                                    isActive ? 'bg-brand-blue text-white' : 'bg-white hover:bg-brand-blue-light'
                                }`}
                            >
                                {region.name}
                            </button>
                        )
                    })}
                </div>

                {selected && (
                    <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm">
                        {selected.addresses.map((addr, i) => (
                            <div
                                key={addr}
                                className={`flex items-center justify-center gap-2 py-3 text-sm text-brand-navy ${
                                    i !== 0 ? 'border-t border-gray-100' : ''
                                }`}
                            >
                                <BuildingOne />
                                <span>{addr}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* RIGHT: two stacked maps that crossfade */}
            <div className="relative overflow-hidden">
                {/* BASE layer: the previous map, always fully visible underneath */}
                <img
                    src={base}
                    alt="Мапа регіонів України"
                    className="h-full max-w-160"
                />

                {/* TOP layer: the new map, fades IN over the base */}
                {isTransitioning && (
                    <img
                        key={mapSrc}
                        src={mapSrc}
                        alt=""
                        aria-hidden="true"
                        onTransitionEnd={() => setBase(mapSrc)}   // once faded in, promote to base
                        className="absolute inset-0 h-full max-w-160 opacity-0 transition-opacity duration-300 ease-in-out"
                        ref={(node) => {
                            // trigger the fade-in on next frame after mount
                            if (node) requestAnimationFrame(() => { node.style.opacity = '1' })
                        }}
                    />
                )}
            </div>
        </div>
    )
}