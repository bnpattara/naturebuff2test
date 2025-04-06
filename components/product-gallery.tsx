"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      src: "/placeholder.svg?height=600&width=600",
      alt: "Buff Wipes product package front view",
    },
    {
      src: "/placeholder.svg?height=600&width=600",
      alt: "Buff Wipes product package back view with ingredients",
    },
    {
      src: "/placeholder.svg?height=600&width=600",
      alt: "Buff Wipes being used outdoors",
    },
    {
      src: "/placeholder.svg?height=600&width=600",
      alt: "Buff Wipes biodegradation demonstration",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div>
      <div className="relative aspect-square mb-4 bg-muted/20 rounded-lg overflow-hidden">
        <Image
          src={images[currentImage].src || "/placeholder.svg"}
          alt={images[currentImage].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-between p-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm h-8 w-8"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm h-8 w-8"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 rounded-full bg-background/80 backdrop-blur-sm h-8 w-8"
            >
              <Expand className="h-4 w-4" />
              <span className="sr-only">Zoom image</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl">
            <div className="relative aspect-square w-full">
              <Image
                src={images[currentImage].src || "/placeholder.svg"}
                alt={images[currentImage].alt}
                fill
                className="object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative aspect-square rounded-md overflow-hidden ${
              currentImage === index ? "ring-2 ring-naturebuff-green" : "opacity-70"
            }`}
            onClick={() => setCurrentImage(index)}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

