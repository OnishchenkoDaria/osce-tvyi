import { regions, defaultMap } from './data/content.ts'
import { BuildingOne } from "@mynaui/icons-react";
import {SectionHeading} from "./MapHeading.tsx";

interface Props {
    selectedId: string | null
    onSelect: (id: string | null) => void
}

export function RegionsDesktop({ selectedId, onSelect }: Props) {
    const selected = regions.find((r) => r.id === selectedId) ?? null
    const mapSrc = selected?.mapImage ?? defaultMap

    return (
        <div className="grid grid-cols-2 items-start gap-8">
            {/* LEFT: pills + address panel */}
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
                                    isActive
                                        ? 'bg-brand-blue text-white'
                                        : 'bg-white hover:bg-brand-blue-light'
                                }`}
                            >
                                {region.name}
                            </button>
                        )
                    })}
                </div>

                {/* Address panel — only when a region is selected (screenshots 2 & 4) */}
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

            {/* RIGHT: map, swaps image based on selection */}
            <div className="relative overflow-hidden">
                <img
                    src={mapSrc}
                    alt="Мапа регіонів України"
                    className="h-full max-w-160"
                />
            </div>
        </div>
    )
}