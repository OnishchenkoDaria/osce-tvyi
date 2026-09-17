import { ChevronDown } from '@mynaui/icons-react'
import { regions } from './data/content.ts'
import { BuildingOne } from "@mynaui/icons-react";

interface Props {
    selectedId: string | null
    onSelect: (id: string | null) => void
}

export function RegionsMobile({ selectedId, onSelect }: Props) {
    return (
        <div className="flex flex-col gap-3">
            {regions.map((region) => {
                const isOpen = region.id === selectedId
                return (
                    <div key={region.id} className="rounded-2xl bg-white shadow-sm">
                        <button
                            type="button"
                            onClick={() => onSelect(isOpen ? null : region.id)}
                            className="flex w-full items-center gap-3 p-4 text-left"
                            aria-expanded={isOpen}
                        >
                            <img src={region.shapeIcon} alt="" aria-hidden="true" className="h-10 w-10" />
                            <span className="flex-1">
                <span className="block font-bold text-brand-navy">{region.name}</span>
                <span className="block text-sm text-gray-500">
                  {region.spaceCount} простори "Твій"
                </span>
              </span>
                            <ChevronDown
                                className={`h-5 w-5 text-gray-400 transition-transform ${
                                    isOpen ? 'rotate-180' : ''
                                }`}
                            />
                        </button>

                        {isOpen && (
                            <div className="border-t border-gray-100 px-4 pb-4">
                                {region.addresses.map((addr, i) => (
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
                )
            })}
        </div>
    )
}