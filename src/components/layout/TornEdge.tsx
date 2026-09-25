export function TornEdge({ src, position }: { src: string; position: 'top' | 'bottom' }) {
    return (
        <img
            src={src}
            alt=""
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 w-full select-none ${
                position === 'top' ? 'top-0' : '-bottom-1'
            }`}
        />
    )
}