import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Package, Recycle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  // Hero carousel images
  const heroImages = [
    {
      src: "/images/heroimage.png",
      alt: "Mountain landscape with turquoise alpine lake surrounded by steep slopes",
    },
    {
      src: "/placeholder.svg?height=800&width=1600",
      alt: "Person hiking in nature with sustainable hygiene products",
    },
    {
      src: "/placeholder.svg?height=800&width=1600",
      alt: "Close-up of biodegradable bamboo wipes in natural setting",
    },
    {
      src: "/placeholder.svg?height=800&width=1600",
      alt: "Natural soap bars with herbs and essential oils",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <HeroCarousel images={heroImages}>
          <div className="container px-4 md:px-6 text-center">
            <h1 className="heading-xl text-white mb-4">Sustainable Hygiene for the Wild at Heart</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Eco-friendly, biodegradable products that keep you fresh without harming the planet.
            </p>
            <Button
              size="lg"
              className="bg-naturebuff-orange hover:bg-naturebuff-orange/90 text-naturebuff-green font-medium"
            >
              <Link href="/shop">Shop Now</Link> <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </HeroCarousel>
      </section>

      {/* Product Introduction */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-naturebuff-green mb-4">Our Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our range of sustainable hygiene products designed for adventurers, travelers, and eco-conscious
              individuals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-2 border-naturebuff-green/10 overflow-hidden">
              <div className="aspect-square relative">
                <Image src="/placeholder.svg?height=400&width=400" alt="Buff Wipes" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="heading-sm text-naturebuff-green mb-2">Buff Wipes</h3>
                <p className="text-muted-foreground mb-4">
                  Biodegradable bamboo wipes for on-the-go freshness. Perfect for hiking, camping, or travel.
                </p>
                <Button className="w-full bg-naturebuff-green hover:bg-naturebuff-green/90">
                  <Link href="/shop?category=wipes">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-naturebuff-green/10 overflow-hidden">
              <div className="aspect-square relative">
                <Image src="/placeholder.svg?height=400&width=400" alt="Soap Bars" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="heading-sm text-naturebuff-green mb-2">Natural Soap Bars</h3>
                <p className="text-muted-foreground mb-4">
                  Plastic-free, all-natural soap bars that are safe for you and safe for rivers and lakes.
                </p>
                <Button className="w-full bg-naturebuff-green hover:bg-naturebuff-green/90">
                  <Link href="/shop?category=soap">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-background border-2 border-naturebuff-green/10 overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="aspect-square relative">
                <Image src="/placeholder.svg?height=400&width=400" alt="Coming Soon" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="heading-sm text-naturebuff-green mb-2">Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  New sustainable products in development. Stay tuned for eco-friendly additions to our collection.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-naturebuff-green text-naturebuff-green hover:bg-naturebuff-green/10"
                >
                  Notify Me
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Nature Buff */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-naturebuff-green mb-4">Why NatureBuff?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe that staying clean shouldn't come at the planet's expense. Our products are designed with both
              performance and sustainability in mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/30">
              <div className="h-12 w-12 rounded-full bg-naturebuff-green/10 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-naturebuff-green" />
              </div>
              <h3 className="heading-sm text-naturebuff-green mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                All our products are made from sustainable materials and are 100% biodegradable or compostable.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/30">
              <div className="h-12 w-12 rounded-full bg-naturebuff-green/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-naturebuff-green" />
              </div>
              <h3 className="heading-sm text-naturebuff-green mb-2">Convenient</h3>
              <p className="text-muted-foreground">
                Designed for on-the-go use, our products are lightweight, compact, and perfect for any adventure.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/30">
              <div className="h-12 w-12 rounded-full bg-naturebuff-green/10 flex items-center justify-center mb-4">
                <Recycle className="h-6 w-6 text-naturebuff-green" />
              </div>
              <h3 className="heading-sm text-naturebuff-green mb-2">Zero Waste</h3>
              <p className="text-muted-foreground">
                We're committed to minimizing waste with plastic-free packaging and biodegradable materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-naturebuff-green/5">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-naturebuff-green mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our community of nature lovers who've made the switch to sustainable hygiene.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-naturebuff-orange mr-3"></div>
                  <div>
                    <h4 className="heading-xs text-naturebuff-green">Sarah K.</h4>
                    <p className="text-sm text-muted-foreground">Hiker & Backpacker</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "I take Buff Wipes on every hiking trip. They're perfect for staying fresh on multi-day treks, and I
                  love that they break down naturally in the environment."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-naturebuff-orange mr-3"></div>
                  <div>
                    <h4 className="heading-xs text-naturebuff-green">Michael T.</h4>
                    <p className="text-sm text-muted-foreground">Frequent Traveler</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "The soap bars are amazing! They last forever, smell great, and I don't have to worry about plastic
                  bottles in my luggage. A game-changer for travel."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-naturebuff-orange mr-3"></div>
                  <div>
                    <h4 className="heading-xs text-naturebuff-green">Jamie L.</h4>
                    <p className="text-sm text-muted-foreground">Eco-Conscious Parent</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "I switched our family to NatureBuff products to reduce our plastic waste. The kids love the soap
                  bars, and I love knowing we're making a difference with every purchase."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-naturebuff-orange text-naturebuff-green">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="heading-lg mb-4">Join the NatureBuff Community</h2>
          <p className="max-w-2xl mx-auto mb-8 text-naturebuff-green/80">
            Subscribe to our newsletter for sustainable living tips, new product announcements, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md flex-1 text-foreground bg-background"
            />
            <Button className="bg-naturebuff-green hover:bg-naturebuff-green/90 text-white">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

