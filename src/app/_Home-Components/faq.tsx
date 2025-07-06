
import { FaqAccordion } from "@/components/common/faq-accordion"
import { faqs } from "./constant"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"


const Faq = () => {
    return (
        <section className="w-full py-20 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-40 right-0 h-80 w-80 rounded-full bg-rose-100 opacity-20 blur-3xl" />
        <div className="absolute bottom-40 left-0 h-80 w-80 rounded-full bg-purple-100 opacity-20 blur-3xl" />

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-rose-600/20 bg-rose-50 px-3 py-1 text-sm font-medium text-rose-600 shadow-sm">
              <span className="mr-1">❓</span> Got Questions?
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="max-w-[800px] text-gray-700 md:text-xl/relaxed">
              Find answers to common questions about our learning platform, courses, and services
            </p>
          </div>

          <div className="grid  mx-auto max-w-5xl">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-rose-500/5 to-purple-600/5 blur-xl" />
              <div className="relative flex items-center justify-center w-full">
                <FaqAccordion
                  faqs={faqs.filter(
                    (faq) => faq.category === "general" || faq.category === "courses" || faq.category === "technical",
                  )}
                />
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-700 mb-6">
              Still have questions? We're here to help you every step of the way.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white"
            >
              Contact Support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    )
}
    

export default Faq;