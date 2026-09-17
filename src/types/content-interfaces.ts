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

export interface FormatCard {
    icon: string
    title: string
    description: string
}

export interface Testimonial {
    quote: string
    author: string
}

export interface SupportType {
    icon: string
    label: string
}

export interface FaqItem {
    question: string
    paragraphs: string[]
    bullets?: string[]
    bulletsAfterParagraph?: number
}