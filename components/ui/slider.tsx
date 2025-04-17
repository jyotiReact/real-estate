"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Define interface for a single slide
interface Slide {
  image: string;
  title: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

// Define slides array with type
const slides: Slide[] = [
  {
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Education is the Mother of Leadership",
    description: "Join our world-class programs to advance your career.",
    cta: { text: "Explore Courses", href: "/courses" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Learn from Expert Faculty",
    description: "Our instructors are industry leaders with years of experience.",
    cta: { text: "Meet Faculty", href: "/faculty" },
  },
  {
    image:
      "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    title: "Modern Campus Facilities",
    description: "Study in a state-of-the-art environment designed for success.",
    cta: { text: "Take a Tour", href: "/campus" },
  },
];



export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Autoplay
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-[650px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-blue-900/60  flex items-center justify-center">
            <div className="text-center text-white px-4">
              <span className="text-sm text-white font-semibold tracking-wider px-4 py-2 rounded-full ">
                WATCH THE VIDEO
              </span>
              <h2 className="text-5xl md:text-7xl text-red font-bold mb-6 max-w-4xl">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-8  ">{slide.description}</p>
              <Link
                href={slide.cta.href}
                className="inline-block  text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
              >
                {slide.cta.text}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500/70 text-white p-3 rounded-full hover:bg-blue-600 transition duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500/70 text-white p-3 rounded-full hover:bg-blue-600 transition duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}

      {/* Navigation Dots and Play/Pause */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
      
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-blue-500 scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}