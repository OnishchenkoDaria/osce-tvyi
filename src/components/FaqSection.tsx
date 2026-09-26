import { useState } from 'react'
import { ChevronDown } from '@mynaui/icons-react'
import { Section } from './layout/Section'
import { Container } from './layout/Container'
import { faqItems } from './data/content'

export function FaqSection({id}:{id: string}) {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <Section id={id} className="py-14">
            <Container>
                <h2 className="text-center font-ubuntu font-semibold text-brand-blue-dark text-2xl">
                    Часті запитання
                </h2>

                <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-4">
                    {faqItems.map((item, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div
                                key={item.question}
                                className="rounded-2xl border border-gray-100 bg-white shadow-sm"
                            >
                                {/* Question row (button) */}
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    aria-expanded={isOpen}
                                    className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                                >
                                    <span className="font-semibold">
                                       {item.question}
                                    </span>
                                    <ChevronDown
                                        className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : ''
                                        }`}
                                    />
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-5 pb-7 md:px-6">
                                            <hr className="text-brand-gray/20 mb-4" />
                                            <FaqAnswer item={item} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </Section>
    )
}

// Renders paragraphs + optional bullet list in the right order
function FaqAnswer({ item }: { item: (typeof faqItems)[number] }) {
    return (
        <div className="space-y-4 text-brand-navy">
            {item.paragraphs.map((p, idx) => (
                <div key={idx}>
                    <p>{p}</p>
                    {item.bullets && item.bulletsAfterParagraph === idx && (
                        <ul className="mt-4 space-y-2">
                            {item.bullets.map((b) => (
                                <li key={b} className="flex gap-2">
                                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    )
}