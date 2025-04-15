"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Take a step towards physics mastery with our Expert Guidance",
    description: "Revise, practice and assess your understanding of physics concepts based on your syllabus.",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    cta: "Start Your Learning Journey",
  },
  {
    id: 2,
    title: "Unlock Premium Learning",
    description: "Join our exclusive community to access premium physics content and master the subject with expert insights.",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    cta: "Explore Premium Content",
  },
  {
    id: 3,
    title: "Master Your Physics Syllabus with Ease",
    description: "Dive into engaging content, track your progress, and unlock the secrets to acing your exams with our intuitive learning path.",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  
    cta: "Start Mastering Physics",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 50000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative overflow-hidden rounded-lg md:rounded-2xl max-w-[100vw]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div 
            key={slide.id} 
            className="min-w-full relative bg-gradient-to-r from-appPrimary to-appPrimary-dark"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center py-8 md:py-12 lg:py-16 gap-8">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="text-white">
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
                    src={slide.image}
                    alt={slide.title}
                    height={500}
                    width={500}
                    // fill
                    className="object-contain"
                    // priority
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
              current === index 
                ? "w-6 md:w-8 bg-white" 
                : "w-2 md:w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}