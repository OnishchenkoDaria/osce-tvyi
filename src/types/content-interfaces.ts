export interface NavLink {
    label: string
    href: string
}

export interface InfoCard {
    title: string
    icon: string
    description: string
}

export interface Region {
    id: string
    name: string
    spaceCount: number
    mapImage: string      // highlighted full-Ukraine map for this region (desktop/tablet)
    shapeIcon: string     // small region silhouette (mobile accordion)
    addresses: string[]
}