"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  category: string
}

export function FaqItem({ question, answer, isOpen, onClick, category }: FaqItemProps) {
  const getGradient = (category: string) => {
    switch (category) {
      case "general":
        return "from-rose-500 to-rose-600"
      case "courses":
        return "from-fuchsia-500 to-fuchsia-600"
      case "pricing":
        return "from-purple-500 to-purple-600"
      case "technical":
        return "from-rose-500 to-fuchsia-500"
      case "certification":
        return "from-fuchsia-500 to-purple-500"
      default:
        return "from-rose-500 to-purple-600"
    }
  }

  const getHoverGradient = (category: string) => {
    switch (category) {
      case "general":
        return "group-hover:from-rose-600 group-hover:to-rose-700"
      case "courses":
        return "group-hover:from-fuchsia-600 group-hover:to-fuchsia-700"
      case "pricing":
        return "group-hover:from-purple-600 group-hover:to-purple-700"
      case "technical":
        return "group-hover:from-rose-600 group-hover:to-fuchsia-600"
      case "certification":
        return "group-hover:from-fuchsia-600 group-hover:to-purple-600"
      default:
        return "group-hover:from-rose-600 group-hover:to-purple-700"
    }
  }

  const getIconColor = (category: string) => {
    switch (category) {
      case "general":
        return "text-rose-500"
      case "courses":
        return "text-fuchsia-500"
      case "pricing":
        return "text-purple-500"
      case "technical":
        return "text-rose-500"
      case "certification":
        return "text-fuchsia-500"
      default:
        return "text-rose-500"
    }
  }

  return (
    <div className="group border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between bg-white p-4 text-left text-lg font-medium transition-all"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br transition-all",
            getGradient(category),
            getHoverGradient(category),
          )}
        >
          <ChevronDown className={cn("h-4 w-4 text-white transition-transform", isOpen && "rotate-180")} />
        </div>
      </button>
      <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96" : "max-h-0")}>
        <div className="bg-white p-4 pt-0">
          <div className={cn("h-0.5 w-16 mb-4 bg-gradient-to-r", getGradient(category))} />
          <p className="text-gray-600">{answer}</p>
        </div>
      </div>
    </div>
  )
}

interface FaqAccordionProps {
  faqs: {
    question: string
    answer: string
    category: string
  }[]
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          category={faq.category}
          isOpen={openIndex === index}
          onClick={() => toggleFaq(index)}
        />
      ))}
    </div>
  )
}
