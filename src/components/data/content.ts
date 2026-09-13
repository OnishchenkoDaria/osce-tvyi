import type { NavLink, InfoCard } from '../../types/content-interfaces'

export const navLinks: NavLink[] = [
    { label: 'Про проєкт', href: '#about' },
    { label: 'Простори', href: '#spaces' },
    { label: 'Відгуки', href: '#testimonials' },
    { label: 'Формат', href: '#formats' },
    { label: 'Партнерам', href: '#partners' },
    { label: 'Q&A', href: '#faq' },
    { label: 'Контакти', href: '#contacts' },
]

export const infoCards: InfoCard[] = [
    { icon: 'users',    title: 'Для кого?',      description: 'Для дітей, які постраждали через війну, та дорослих, які їх підтримують.' },
    { icon: 'heart',    title: 'Яка допомога?',  description: 'Індивідуальні консультації, групові заняття, арттерапія та підтримка для батьків і опікунів.' },
    { icon: 'settings', title: 'Хто реалізує?',  description: 'Мережа просторів працює за підтримки Програми підтримки ОБСЄ для України та Національної соціальної сервісної служби України.' },
    { icon: 'shield',   title: 'Чому безпечно?', description: 'Працюють виключно кваліфіковані фахівці. Без діагнозів, ярликів і зайвої бюрократії – з повагою до дитини.' },
]