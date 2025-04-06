import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background py-5 md:py-6">
      <div className="container flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/shop"
            className="text-sm font-medium hover:text-naturebuff-green hover:underline underline-offset-4"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-naturebuff-green hover:underline underline-offset-4"
          >
            About Us
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm font-medium hover:text-naturebuff-green hover:underline underline-offset-4"
          >
            How It Works
          </Link>
        </nav>

        <div className="flex items-center mx-auto md:absolute md:left-1/2 md:transform md:-translate-x-1/2 px-6 py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="NatureBuff Logo"
              width={220}
              height={60}
              className="h-14 md:h-16 w-auto"
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-8 mr-4">
            <Link
              href="/journal"
              className="text-sm font-medium hover:text-naturebuff-green hover:underline underline-offset-4"
            >
              Journal
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium hover:text-naturebuff-green hover:underline underline-offset-4"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-naturebuff-green hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-naturebuff-green text-naturebuff-green hover:bg-naturebuff-green/10"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
          <Button className="hidden md:flex bg-naturebuff-orange hover:bg-naturebuff-orange/90 text-naturebuff-green">
            Shop Now
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

