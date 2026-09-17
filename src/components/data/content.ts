import type {NavLink, InfoCard, Region, FormatCard} from '../../types/content-interfaces'

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

import mapVinnytsia from '../../assets/maps/vinnytsia.png'
import mapLviv from '../../assets/maps/lviv.png'
import mapTernopil from '../../assets/maps/ternopil.png'
import mapIvano from '../../assets/maps/ivano-frankivsk.png'
import mapChernivtsi from '../../assets/maps/chernivtsi.png'
import mapZakarpattia from '../../assets/maps/zakarpattia.png'
import mapDefault  from '../../assets/maps/default.png'

import shapeVinnytsia from '../../assets/regions/vinnitsia.png'
import shapeLviv from '../../assets/regions/lviv.png'
import shapeTernopil from '../../assets/regions/ternopil.png'
import shapeIvano from '../../assets/regions/ivano-frankivsk.png'
import shapeChernivtsi from '../../assets/regions/chernivtsi.png'
import shapeZakarpattia from '../../assets/regions/zakarpattia.png'

export const defaultMap = mapDefault

export const regions: Region[] = [
    {
        id: 'vinnytsia',
        name: 'Вінницька область',
        spaceCount: 3,
        mapImage: mapVinnytsia,
        shapeIcon: shapeVinnytsia,
        addresses: [
            'м. Вінниця, вул. Хмельницьке шосе, 7',
            'м. Погребище, вул. Б. Хмельницького, 81',
            'м. Вінниця, вул. Космонавтів, 30',
        ],
    },
    {
        id: 'lviv',
        name: 'Львівська область',
        spaceCount: 6,
        mapImage: mapLviv,
        shapeIcon: shapeLviv,
        addresses: [
            'м. Львів, вул. Митрополита Андрея, 10',
            'м. Львів, вул. Зелена, 204 Б',
            'м. Новий Розділ, вул. Грушевського, 16 А',
            'м. Трускавець, пл. Чорновола, 2',
            'м. Добромиль, пл. Ринок 1',
            'м. Мостиська, Грушевського, 22',
        ],
    },
    {
        id: 'ternopil',
        name: 'Тернопільська область',
        spaceCount: 3,
        mapImage: mapTernopil,
        shapeIcon: shapeTernopil,
        addresses: [
            'с. Товсте, вул. Робітнича, 1',
            'м. Чортків, вул. Коновальця, 13 А',
            'м. Шумськ, вул. Українська, 59',
        ],
    },
    {
        id: 'ivano-frankivsk',
        name: 'Івано-Франківська область',
        spaceCount: 4,
        mapImage: mapIvano,
        shapeIcon: shapeIvano,
        addresses: [
            'м. Івано-Франківськ, вул. Грушевського, 21',
            'с. Старий Лисець, вул. Шевченка, 86 А',
            'с. Смодна, вул. Незалежності, 48',
            'с. Воскресинці, вул. Шевченка, 40 Б',
        ],
    },
    {
        id: 'chernivtsi',
        name: 'Чернівецька область',
        spaceCount: 2,
        mapImage: mapChernivtsi,
        shapeIcon: shapeChernivtsi,
        addresses: [
            'м. Хотин, вул. Незалежності, 30',
            'м. Заставна, вул. Незалежності, 93',
        ],
    },
    {
        id: 'zakarpattia',
        name: 'Закарпатська область',
        spaceCount: 3,
        mapImage: mapZakarpattia,
        shapeIcon: shapeZakarpattia,
        addresses: [
            'м. Перечин, вул. Ужгородська, 15',
            'м. Мукачево, вул. Духновича, 1, 3 поверх',
            'м. Берегове, вул. Шевченка, 122',
        ],
    },
]

export const formatCards: FormatCard[] = [
    {
        icon: 'yellow',
        title: 'Індивідуальні консультації',
        description: 'Підтримка дитини відповідно до її запиту, потреб та віку.'
    },
    {
        icon: 'green',
        title: 'Групові заняття',
        description: 'Заняття з емоційного розвантаження та розвитку навичок самопідтримки.'
    },
    {
        icon: 'blue',
        title: 'Арттерапія',
        description: 'Малювання, ліплення, театр та інші формати, що допомагають опрацьовувати досвід.'
    },
    {
        icon: 'blue',
        title: 'Корекційно-розвивальні формати',
        description: 'Заняття, спрямовані на розвиток мовлення, пам\'яті, мислення та уваги.'
    },
    {
        icon: 'yellow',
        title: 'Консультації для батьків та опікунів',
        description: 'Розуміння потреб дитини, практичні техніки та підтримка дорослих вдома.'
    },
    {
        icon: 'green',
        title: 'Інші формати',
        description: 'Лекції, майстер-класи, тренінги та тематичні заходи за запитом простору та громади.'
    },
]