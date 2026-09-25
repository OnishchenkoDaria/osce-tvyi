export function Section(
    {children, className="", id, style}: {children: React.ReactNode; className?: string; id?: string; style?: React.CSSProperties}
) {
    return (
        <section id={id} className={`${className}`} style={style}>
            {children}
        </section>
    )
}