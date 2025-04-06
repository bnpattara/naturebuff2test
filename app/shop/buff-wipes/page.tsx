import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, ChevronRight, Leaf, Minus, Plus, Recycle, ShieldCheck, Star, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductGallery } from "@/components/product-gallery"

export default function BuffWipesPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-naturebuff-green">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/shop" className="hover:text-naturebuff-green">
          Shop
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground">Buff Wipes</span>
      </div>

      {/* Product Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Gallery */}
        <div className="relative">
          <ProductGallery />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="heading-lg text-naturebuff-green mb-2">Buff Wipes</h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-naturebuff-orange text-naturebuff-orange" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(124 reviews)</span>
          </div>

          <div className="mb-6">
            <p className="text-2xl font-bold mb-2">$12.99</p>
            <p className="text-sm text-muted-foreground">or subscribe and save 15% ($11.04 / pack)</p>
          </div>

          <p className="text-muted-foreground mb-6">
            Biodegradable bamboo wipes for on-the-go freshness. Perfect for hiking, camping, travel, or everyday use.
            Our eco-friendly wipes keep you clean without harming the planet.
          </p>

          {/* Scent Selection */}
          <div className="mb-6">
            <h3 className="font-heading font-bold mb-3">Scent</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="rounded-full border-2 border-naturebuff-green bg-naturebuff-green/5">
                Unscented
              </Button>
              <Button variant="outline" className="rounded-full">
                Lavender
              </Button>
              <Button variant="outline" className="rounded-full">
                Eucalyptus
              </Button>
            </div>
          </div>

          {/* Pack Size */}
          <div className="mb-6">
            <h3 className="font-heading font-bold mb-3">Pack Size</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="rounded-full">
                10-pack
              </Button>
              <Button variant="outline" className="rounded-full border-2 border-naturebuff-green bg-naturebuff-green/5">
                30-pack
              </Button>
              <Button variant="outline" className="rounded-full">
                60-pack
              </Button>
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <h3 className="font-heading font-bold mb-3">Quantity</h3>
            <div className="flex items-center">
              <Button variant="outline" size="icon" className="rounded-l-md rounded-r-none h-12 w-12">
                <Minus className="h-4 w-4" />
              </Button>
              <div className="h-12 w-16 flex items-center justify-center border-y border-input">
                <span className="text-lg">1</span>
              </div>
              <Button variant="outline" size="icon" className="rounded-r-md rounded-l-none h-12 w-12">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Purchase Options */}
          <div className="flex flex-col gap-4 mb-8">
            <Button size="lg" className="bg-naturebuff-green hover:bg-naturebuff-green/90 text-white">
              Add to Cart
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-naturebuff-orange text-naturebuff-orange hover:bg-naturebuff-orange/10"
            >
              Subscribe & Save 15%
            </Button>
          </div>

          {/* Key Features */}
          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-2">
              <Leaf className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
              <p className="text-sm">100% biodegradable bamboo fiber</p>
            </div>
            <div className="flex items-start gap-2">
              <Recycle className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
              <p className="text-sm">Breaks down naturally in 4-6 weeks</p>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
              <p className="text-sm">Free from harsh chemicals, alcohol, and synthetic fragrances</p>
            </div>
            <div className="flex items-start gap-2">
              <Truck className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
              <p className="text-sm">Free shipping on orders over $35</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="description" className="mb-16">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger
            value="description"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-naturebuff-green data-[state=active]:bg-transparent py-3 font-heading font-medium"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="ingredients"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-naturebuff-green data-[state=active]:bg-transparent py-3 font-heading font-medium"
          >
            Ingredients
          </TabsTrigger>
          <TabsTrigger
            value="how-to-use"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-naturebuff-green data-[state=active]:bg-transparent py-3 font-heading font-medium"
          >
            How to Use
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-naturebuff-green data-[state=active]:bg-transparent py-3 font-heading font-medium"
          >
            Reviews
          </TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="pt-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="heading-md text-naturebuff-green mb-4">Stay Fresh Anywhere</h2>
              <p className="text-muted-foreground mb-4">
                Buff Wipes are designed for adventurers, travelers, and anyone who wants to stay fresh on the go without
                compromising on sustainability. Our biodegradable bamboo wipes provide effective cleansing while being
                gentle on both your skin and the environment.
              </p>
              <p className="text-muted-foreground mb-4">
                Unlike conventional wipes that contain plastic fibers and can take hundreds of years to break down, Buff
                Wipes are made from 100% biodegradable bamboo fiber that naturally decomposes in just 4-6 weeks when
                properly disposed of.
              </p>
              <p className="text-muted-foreground">
                Each wipe is infused with gentle, plant-based cleansers and essential oils (in scented varieties) to
                leave your skin feeling clean and refreshed without harsh chemicals or synthetic fragrances.
              </p>
            </div>
            <div>
              <h3 className="heading-sm text-naturebuff-green mb-4">Features & Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
                  <span>Biodegradable bamboo fiber breaks down in 4-6 weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
                  <span>Plastic-free, compostable packaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
                  <span>pH balanced and suitable for all skin types</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
                  <span>Free from alcohol, parabens, and synthetic fragrances</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
                  <span>Available in Unscented, Lavender, and Eucalyptus</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
                  <span>Compact, resealable packaging perfect for travel</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
                  <span>Cruelty-free and never tested on animals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-naturebuff-green mt-0.5 flex-shrink-0" />
                  <span>1% of sales donated to environmental nonprofits</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="ingredients" className="pt-6">
          <div className="max-w-3xl">
            <h2 className="heading-md text-naturebuff-green mb-4">What's Inside</h2>
            <p className="text-muted-foreground mb-6">
              We believe in transparency about what goes into our products. Buff Wipes are made with carefully selected
              ingredients that are safe for you and the environment.
            </p>

            <h3 className="heading-sm text-naturebuff-green mb-3">Base Ingredients (All Varieties)</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-muted-foreground">
              <li>100% Biodegradable Bamboo Fiber</li>
              <li>Purified Water</li>
              <li>Aloe Vera Leaf Juice</li>
              <li>Vegetable Glycerin</li>
              <li>Decyl Glucoside (Plant-Based Cleanser)</li>
              <li>Sodium Benzoate (Natural Preservative)</li>
              <li>Potassium Sorbate (Natural Preservative)</li>
              <li>Citric Acid (pH Balancer)</li>
            </ul>

            <h3 className="heading-sm text-naturebuff-green mb-3">Additional Ingredients by Variety</h3>
            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-heading font-semibold mb-1">Unscented</h4>
                <p className="text-muted-foreground">No additional ingredients</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1">Lavender</h4>
                <p className="text-muted-foreground">Lavandula Angustifolia (Lavender) Oil</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1">Eucalyptus</h4>
                <p className="text-muted-foreground">Eucalyptus Globulus Leaf Oil</p>
              </div>
            </div>

            <h3 className="heading-sm text-naturebuff-green mb-3">What's NOT Inside</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Alcohol</li>
              <li>Parabens</li>
              <li>Phthalates</li>
              <li>Synthetic Fragrances</li>
              <li>Sulfates</li>
              <li>Artificial Colors</li>
              <li>Plastic Fibers</li>
              <li>Animal-Derived Ingredients</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="how-to-use" className="pt-6">
          <div className="max-w-3xl">
            <h2 className="heading-md text-naturebuff-green mb-4">How to Use Buff Wipes</h2>
            <p className="text-muted-foreground mb-6">
              Buff Wipes are designed to be simple and convenient to use wherever your adventures take you.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-naturebuff-green">1</span>
                </div>
                <h3 className="heading-sm text-naturebuff-green mb-2">Open</h3>
                <p className="text-muted-foreground text-sm">
                  Peel back the resealable label and remove a single wipe.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-naturebuff-green">2</span>
                </div>
                <h3 className="heading-sm text-naturebuff-green mb-2">Use</h3>
                <p className="text-muted-foreground text-sm">
                  Gently wipe skin to cleanse and refresh. No rinsing needed.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-naturebuff-green">3</span>
                </div>
                <h3 className="heading-sm text-naturebuff-green mb-2">Dispose</h3>
                <p className="text-muted-foreground text-sm">Compost or dispose with regular waste. Never flush.</p>
              </div>
            </div>

            <h3 className="heading-sm text-naturebuff-green mb-3">Tips for Best Use</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-muted-foreground">
              <li>Always reseal the package after use to prevent wipes from drying out.</li>
              <li>For face use, test on a small area first, especially if you have sensitive skin.</li>
              <li>
                While our wipes are biodegradable, please never flush them as they can still cause plumbing issues.
              </li>
              <li>For optimal environmental impact, dispose of used wipes in a compost bin when possible.</li>
              <li>Store in a cool, dry place away from direct sunlight.</li>
            </ul>

            <h3 className="heading-sm text-naturebuff-green mb-3">Ideal Uses</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Freshening up during or after outdoor activities</li>
              <li>Cleaning hands and face while traveling</li>
              <li>Quick cleansing when shower facilities aren't available</li>
              <li>Removing dirt, sweat, and grime after workouts</li>
              <li>General hygiene maintenance on camping or backpacking trips</li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="pt-6">
          <div className="max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h2 className="heading-md text-naturebuff-green mb-2">Customer Reviews</h2>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-naturebuff-orange text-naturebuff-orange" />
                    ))}
                  </div>
                  <span className="text-sm">Based on 124 reviews</span>
                </div>
              </div>
              <Button className="bg-naturebuff-orange hover:bg-naturebuff-orange/90 text-naturebuff-green">
                Write a Review
              </Button>
            </div>

            <div className="space-y-6">
              {/* Review 1 */}
              <div className="border-b pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-naturebuff-orange text-naturebuff-orange" />
                    ))}
                  </div>
                  <h4 className="font-heading font-semibold">Perfect for backpacking trips</h4>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>Sarah K.</span>
                  <span>•</span>
                  <span>Verified Buyer</span>
                  <span>•</span>
                  <span>March 15, 2023</span>
                </div>
                <p className="text-muted-foreground mb-2">
                  I've been using these wipes on multi-day backpacking trips and they're a game-changer. They're
                  effective at cleaning off trail dirt and sweat, and I love that they break down naturally if I need to
                  pack them out. The unscented version is perfect for sensitive skin and doesn't attract bugs.
                </p>
              </div>

              {/* Review 2 */}
              <div className="border-b pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-naturebuff-orange text-naturebuff-orange" />
                    ))}
                  </div>
                  <h4 className="font-heading font-semibold">Great for travel</h4>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>Michael T.</span>
                  <span>•</span>
                  <span>Verified Buyer</span>
                  <span>•</span>
                  <span>February 28, 2023</span>
                </div>
                <p className="text-muted-foreground mb-2">
                  I keep these in my carry-on for long flights. The eucalyptus scent is refreshing without being
                  overpowering, and they're much more effective than the tiny airline wipes. Love that they're
                  eco-friendly too!
                </p>
              </div>

              {/* Review 3 */}
              <div className="border-b pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-naturebuff-orange text-naturebuff-orange" />
                    ))}
                    <Star className="h-4 w-4 text-naturebuff-orange" />
                  </div>
                  <h4 className="font-heading font-semibold">Good product, packaging could be improved</h4>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>Jamie L.</span>
                  <span>•</span>
                  <span>Verified Buyer</span>
                  <span>•</span>
                  <span>February 10, 2023</span>
                </div>
                <p className="text-muted-foreground mb-2">
                  The wipes themselves are excellent - soft, effective, and I love the lavender scent. My only complaint
                  is that the resealable tab lost its stickiness after about a week of use, which made the remaining
                  wipes dry out faster. Would love to see a better closure system in the future.
                </p>
              </div>

              <Button variant="outline" className="w-full">
                Load More Reviews
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Products */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading-lg text-naturebuff-green">You May Also Like</h2>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Related Product 1 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Buff Wipes Travel Pack"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-heading font-bold mb-1">Buff Wipes - Travel Pack</h3>
              <p className="text-sm text-muted-foreground mb-2">10-pack for on-the-go</p>
              <div className="flex items-center justify-between">
                <span className="font-medium">$8.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Product 2 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Eucalyptus Soap Bar"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-heading font-bold mb-1">Eucalyptus Soap Bar</h3>
              <p className="text-sm text-muted-foreground mb-2">Refreshing natural soap</p>
              <div className="flex items-center justify-between">
                <span className="font-medium">$9.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Product 3 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Bamboo Travel Case"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-heading font-bold mb-1">Bamboo Travel Case</h3>
              <p className="text-sm text-muted-foreground mb-2">For soap bars and wipes</p>
              <div className="flex items-center justify-between">
                <span className="font-medium">$14.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Product 4 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Buff Wipes Family Pack"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-heading font-bold mb-1">Buff Wipes - Family Pack</h3>
              <p className="text-sm text-muted-foreground mb-2">60-pack for extended use</p>
              <div className="flex items-center justify-between">
                <span className="font-medium">$24.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

