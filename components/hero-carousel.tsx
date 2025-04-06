"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface HeroCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  interval?: number
  children?: React.ReactNode
}

export function HeroCarousel({ images, interval = 5000, children }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Pause auto-rotation when user interacts with controls
  const handleInteraction = useCallback(() => {
    setIsAutoPlaying(false)
    // Resume auto-rotation after 10 seconds of inactivity
    const timer = setTimeout(() => setIsAutoPlaying(true), 10000)
    return () => clearTimeout(timer)
  }, [])

  // Auto-rotate slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(goToNext, interval)
    return () => clearInterval(timer)
  }, [goToNext, interval, isAutoPlaying])

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Images */}
      <div className="relative h-full w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-20" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">{children}</div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border-white/20"
        onClick={() => {
          goToPrevious()
          handleInteraction()
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/40 text-white border-white/20"
        onClick={() => {
          goToNext()
          handleInteraction()
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => {
              goToSlide(index)
              handleInteraction()
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

