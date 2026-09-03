export function Container({children} : {children: React.ReactNode}) {
    return(
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-16">
            {children}
        </div>
    )
}