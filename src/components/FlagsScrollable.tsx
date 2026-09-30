import {ContriesRowOne, CountriesRowTwo} from "./data/content.ts";

function FlagRow({ codes, direction }: { codes: string[]; direction: 'right' | 'left' }) {
    return (
        <div className="relative w-full overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-brand-violet-gray to-transparent md:w-40" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-brand-violet-gray to-transparent md:w-40" />

            <div
                className={`flex w-max gap-6 ${
                    direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'
                }`}
            >
                {[...codes, ...codes].map((code, i) => (
                    <span
                        key={`${code}-${i}`}
                        className={`fi fi-${code} shrink-0 shadow-sm`}
                        style={{ width: '80px', height: '60px' }}
                    />
                ))}
            </div>
        </div>
    )
}

export function FlagsScrollable() {
    return (
        <div className="flex w-full flex-col gap-6">
            <FlagRow codes={ContriesRowOne} direction="right" />
            <FlagRow codes={CountriesRowTwo} direction="left" />
        </div>
    )
}