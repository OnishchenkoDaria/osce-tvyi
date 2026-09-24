import { Menu } from "@mynaui/icons-react";
import {useState} from 'react'
import { MobileMenuOverlay } from './MobileMenuOverlay'
import logo from "../assets/logos/tviy-logo.png"
import {navLinks} from "./data/content.ts";
import { useScrollSpy } from '../hooks/useScrollSpy'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // ids from your nav hrefs ('#about' -> 'about')
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''))
    const activeId = useScrollSpy(sectionIds, 80) // 80 ≈ header height
    return (
        <header className="sticky top-0 z-40 bg-white">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 md:px-8 lg:px-16">

                {/* Logo (+ tagline on desktop, per screenshot 1) */}
                <a href="#" className="flex shrink-0 items-center gap-3">
                    <img src={logo} alt="Твій" className="h-8 w-auto lg:h-10" />
                    <span className="hidden max-w-[12rem] text-[10px] leading-tight text-gray-500 lg:block">
                        Мережа просторів психологічної та соціальної підтримки дітей
                    </span>
                </a>

                {/* Inline nav — tablet/desktop only */}
                <nav className="hidden items-center gap-5 md:flex lg:gap-7">
                    {navLinks.map((link) => {
                        const id = link.href.replace('#', '')
                        const isActive = activeId === id
                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${
                                    isActive
                                        ? 'text-brand-blue'      // active → company purple/blue
                                        : 'text-brand-navy hover:text-brand-blue'
                                }`}
                            >
                                {link.label}
                            </a>
                        )
                    })}
                </nav>

                    {/* CTA button — tablet/desktop only */}
                <a
                    href="#partners"
                    className="hidden shrink-0 rounded-full bg-red-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-500 md:inline-block"
                    >
                    Стати партнером
                </a>

                {/* Hamburger — mobile only */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Відкрити меню"
                    className="flex h-10 w-10 items-center justify-center text-brand-navy md:hidden"
                >
                    <Menu className="h-6 w-6" color="#7E7E83" />
                </button>
            </div>
            <MobileMenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </header>
    )
}