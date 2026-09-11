export function Section(
    {children, className=""}: {children: React.ReactNode; className?: string}
) {
    return (
        <section className={`py-8 md:py-12 lg:py-18 ${className}`}>
            {children}
        </section>
    )
}