import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JournalPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Journal</h1>
          <p className="text-muted-foreground">Sustainable living tips, outdoor adventures, and product insights</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="sustainable-living">Sustainable Living</SelectItem>
              <SelectItem value="outdoor-adventures">Outdoor Adventures</SelectItem>
              <SelectItem value="product-insights">Product Insights</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Featured Article */}
      <section className="mb-12">
        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative h-[50vh] w-full">
            <Image src="/placeholder.svg?height=600&width=1200" alt="Featured article" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 z-20 flex items-end p-6 md:p-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 text-white/80 mb-2">
                <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Sustainable Living
                </span>
                <span className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-1" /> March 15, 2023
                </span>
                <span className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-1" /> Max Velinsky
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                5 Simple Swaps for a Plastic-Free Bathroom Routine
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl">
                Discover how small changes in your daily hygiene routine can make a big difference for the planet. These
                easy swaps will help you reduce plastic waste without sacrificing convenience.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Read Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article 1 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Article image" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-muted-foreground mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Outdoor Adventures
                </span>
                <span className="text-xs">March 1, 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Link href="#" className="hover:text-primary transition-colors">
                  Hiking the Pacific Crest Trail: Leave No Trace Tips
                </Link>
              </h3>
              <p className="text-muted-foreground">
                Essential practices for minimizing your environmental impact while enjoying one of America's most
                beautiful trails.
              </p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button variant="outline" size="sm" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>

          {/* Article 2 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Article image" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-muted-foreground mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Product Insights
                </span>
                <span className="text-xs">February 15, 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Link href="#" className="hover:text-primary transition-colors">
                  The Science Behind Our Biodegradable Wipes
                </Link>
              </h3>
              <p className="text-muted-foreground">
                A deep dive into how we developed our signature Buff Wipes and the testing process that ensures they
                truly break down in nature.
              </p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button variant="outline" size="sm" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>

          {/* Article 3 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Article image" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-muted-foreground mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Sustainable Living
                </span>
                <span className="text-xs">February 1, 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Link href="#" className="hover:text-primary transition-colors">
                  Zero-Waste Travel: A Beginner's Guide
                </Link>
              </h3>
              <p className="text-muted-foreground">
                Practical tips for reducing waste while traveling, from packing essentials to finding eco-friendly
                accommodations.
              </p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button variant="outline" size="sm" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>

          {/* Article 4 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Article image" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-muted-foreground mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Outdoor Adventures
                </span>
                <span className="text-xs">January 15, 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Link href="#" className="hover:text-primary transition-colors">
                  Winter Camping: Staying Clean in Cold Conditions
                </Link>
              </h3>
              <p className="text-muted-foreground">
                Expert advice on maintaining hygiene during winter camping trips when water sources are limited or
                frozen.
              </p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button variant="outline" size="sm" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>

          {/* Article 5 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Article image" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-muted-foreground mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Product Insights
                </span>
                <span className="text-xs">January 1, 2023</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Link href="#" className="hover:text-primary transition-colors">
                  From Tree to Soap: The Journey of Our Natural Ingredients
                </Link>
              </h3>
              <p className="text-muted-foreground">
                Follow the sourcing process of our soap ingredients, from sustainable harvesting to final production.
              </p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button variant="outline" size="sm" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>

          {/* Article 6 */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Article image" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 text-muted-foreground mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Sustainable Living
                </span>
                <span className="text-xs">December 15, 2022</span>
              </div>
              <h3 className="text-xl font-bold mb-2">
                <Link href="#" className="hover:text-primary transition-colors">
                  Teaching Kids About Sustainability Through Outdoor Play
                </Link>
              </h3>
              <p className="text-muted-foreground">
                Fun activities that help children connect with nature and learn about environmental responsibility.
              </p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button variant="outline" size="sm" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </section>
    </div>
  )
}

