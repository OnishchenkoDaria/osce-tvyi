import { useEffect } from 'react'
import { X } from '@mynaui/icons-react'
import { navLinks } from './data/content'

interface MobileMenuOverlayProps {
    isOpen: boolean
    onClose: () => void
}

export function MobileMenuOverlay({ isOpen, onClose }: MobileMenuOverlayProps) {
    // Lock body scroll + close on Escape while the menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', onKey)
        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', onKey)
        }
    }, [isOpen, onClose])

    return (
        <div
            className={`fixed inset-0 z-50 bg-white transition-opacity duration-300 ${
                isOpen
                    ? 'pointer-events-auto opacity-100'
                    : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={!isOpen}
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Закрити меню"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-brand-navy md:right-8 lg:right-16"
            >
                <X className="h-6 w-6" color="#7E7E83" />
            </button>

            {/* Vertical nav links, centered block with dividers */}
            <nav className="flex h-full flex-col justify-center px-8 md:mx-auto md:max-w-md">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={onClose}
                        className="border-b-1 border-light-purple py-4 text-xl text-brand-navy last:border-b-0"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </div>
    )
}