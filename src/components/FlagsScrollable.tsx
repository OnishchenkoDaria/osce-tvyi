import {ContriesRowOne, CountriesRowTwo} from "./data/content.ts";

function FlagRow({ codes, direction }: { codes: string[]; direction: 'right' | 'left' }) {
    return (
        <div className="w-full overflow-hidden">
            <div
                className={`flex w-max gap-6 ${
                    direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'
                }`}
            >
                {[...codes, ...codes].map((code, i) => (
                    <span
                        key={`${code}-${i}`}
                        className={`fi fi-${code} shrink-0 rounded-md shadow-sm`}
                        style={{ width: '80px', height: '56px' }}
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