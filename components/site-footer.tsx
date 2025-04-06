import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4">
            <Image src="/images/logo.png" alt="NatureBuff Logo" width={220} height={60} className="h-16 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground max-w-md text-center">
            Sustainable hygiene products for the wild at heart. Eco-friendly, biodegradable, and perfect for your
            adventures.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="w-40">
            <h3 className="font-heading font-bold mb-4 text-naturebuff-green">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=wipes" className="text-sm text-muted-foreground hover:text-naturebuff-green">
                  Buff Wipes
                </Link>
              </li>
              <li>
                <Link href="/shop?category=soap" className="text-sm text-muted-foreground hover:text-naturebuff-green">
                  Soap Bars
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-naturebuff-green">
                  All Products
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-40">
            <h3 className="font-heading font-bold mb-4 text-naturebuff-green">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about#story" className="text-sm text-muted-foreground hover:text-naturebuff-green">
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/about#sustainability"
                  className="text-sm text-muted-foreground hover:text-naturebuff-green"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-sm text-muted-foreground hover:text-naturebuff-green">
                  Meet the Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-40">
            <h3 className="font-heading font-bold mb-4 text-naturebuff-green">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/journal" className="text-sm text-muted-foreground hover:text-naturebuff-green">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-naturebuff-green">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-naturebuff-green">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-40">
            <h3 className="font-heading font-bold mb-4 text-naturebuff-green">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-naturebuff-green"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-naturebuff-green"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="text-sm text-muted-foreground hover:text-naturebuff-green"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NatureBuff. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

