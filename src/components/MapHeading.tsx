export function SectionHeading() {
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

            <div className="flex items-center gap-3 pl-10 md:pl-20">
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