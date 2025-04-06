"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="pr-0">
        <div className="px-7 pt-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
              <Image src="/images/logo.png" alt="NatureBuff Logo" width={160} height={45} className="h-12 w-auto" />
            </Link>
            <Button variant="ghost" className="h-6 w-6 p-0" onClick={() => setOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <div className="mt-8 flex flex-col gap-5">
            <Link href="/shop" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Shop
            </Link>
            <Link href="/about" className="text-lg font-medium" onClick={() => setOpen(false)}>
              About Us
            </Link>
            <Link href="/how-it-works" className="text-lg font-medium" onClick={() => setOpen(false)}>
              How It Works
            </Link>
            <Link href="/journal" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Journal
            </Link>
            <Link href="/faq" className="text-lg font-medium" onClick={() => setOpen(false)}>
              FAQ
            </Link>
            <Link href="/contact" className="text-lg font-medium" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

