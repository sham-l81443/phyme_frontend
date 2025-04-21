"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What topics are covered in the physics courses?",
    answer:
      "Our courses cover a comprehensive range of physics topics including Classical Mechanics, Electromagnetism, Thermodynamics, Quantum Physics, and Modern Physics. Each course is structured to align with standard academic curricula while providing additional insights and practical applications.",
  },
  {
    question: "How do the interactive learning sessions work?",
    answer:
      "Interactive learning sessions combine live problem-solving, virtual experiments, and real-time Q&A with expert physics instructors. Students can participate in discussions, work through complex problems, and receive immediate feedback on their understanding of concepts.",
  },
  {
    question: "Are there any prerequisites for joining the courses?",
    answer:
      "While basic mathematics knowledge is helpful, our courses are designed to accommodate different learning levels. We provide foundational modules for beginners and advanced content for those seeking deeper understanding. Each course clearly outlines any specific prerequisites.",
  },
  {
    question: "How can I track my progress in the course?",
    answer:
      "Our platform features a comprehensive progress tracking system that includes performance analytics, completion rates, and personalized feedback. You can monitor your understanding through practice tests, assignments, and interactive assessments.",
  },
  {
    question: "What support is available if I struggle with concepts?",
    answer:
      "We offer multiple layers of support including 24/7 doubt clearing sessions, one-on-one mentoring, detailed solution guides, and a community forum where you can discuss concepts with peers and instructors.",
  },
  {
    question: "Can I access the course materials offline?",
    answer:
      "Yes, most of our course materials are available for offline access through our mobile app. This includes lecture notes, practice problems, and recorded video lectures. However, interactive sessions and live classes require an internet connection.",
  },
]

export default function FAQ() {
  return (
    <section className="py-16 sm:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a] opacity-95"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600 rounded-full filter blur-[128px] opacity-20"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent inline-block mb-4">
            🧐 You're not the only one wondering...
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            "The important thing is not to stop questioning. Curiosity has its own reason for existing." – Albert
            Einstein
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="px-4 sm:px-6 py-4 text-left hover:no-underline">
                <span className="text-sm sm:text-base font-medium text-slate-200 hover:text-white">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4 text-sm sm:text-base text-slate-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-10">
          <p className="text-slate-400 text-sm italic">"Curious minds grow faster."</p>
        </div>
      </div>
    </section>
  )
}
