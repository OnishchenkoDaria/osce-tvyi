import { Menu } from "@mynaui/icons-react";
import {useState} from 'react'
import { MobileMenuOverlay } from './MobileMenuOverlay'
import logo from "../assets/logos/tviy-logo.png"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return(
        <header className="sticky top-0 z-40 bg-white">
            <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 md:px-8 lg:px-16">
                <a href="#">
                    <img src={logo} alt="logo" className="h-8 w-auto" />
                </a>
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Відкрити меню"
                    className="flex h-10 w-10 items-center justify-center text-brand-navy"
                >
                    <Menu className="h-6 w-6" color="#7E7E83" />
                </button>
            </div>

            <MobileMenuOverlay
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </header>
    )
}