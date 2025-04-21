"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: '"Learning never exhausts the mind." - Leonardo da Vinci',
    description:
      "Discover the joy of understanding how our universe works through engaging physics lessons tailored to your learning style.",
    image: "https://source.unsplash.com/500x500/?albert-einstein,physics,equations",
    cta: "Begin Your Journey",
  },
  {
    id: 2,
    title:
      '"The important thing is not to stop questioning. Curiosity has its own reason for existing." – Albert Einstein',
    description: "Join our community of curious minds exploring the fundamental laws that govern our reality.",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    cta: "Nurture Your Curiosity",
  },
  {
    id: 3,
    title: '"What we learn becomes a part of who we are." – Anonymous',
    description:
      "Transform your understanding of the physical world through our carefully crafted learning experiences.",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    cta: "Transform Your Understanding",
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative overflow-hidden rounded-lg md:rounded-2xl max-w-[100vw]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative bg-gradient-to-r from-appPrimary to-appPrimary-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center py-8 md:py-12 lg:py-16 gap-8">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="text-white">
                    <div className="inline-block rounded-lg bg-[#C084fc]/30 px-3 py-1 text-sm mb-4">
                      Discover the beauty of physics
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto lg:mx-0">
                      {slide.description}
                    </p>
                    <Button className="rounded-full bg-gradient-to-r from-appPrimary-dark to-[#C54bbc] hover:opacity-90 transition-opacity border-none px-4 sm:px-6 py-2 sm:py-3 h-auto text-sm sm:text-base w-full sm:w-auto">
                      {slide.cta}
                    </Button>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    height={500}
                    width={500}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
              current === index ? "w-6 md:w-8 bg-white" : "w-2 md:w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
