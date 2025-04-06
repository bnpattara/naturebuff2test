import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorksPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">How It Works</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover how NatureBuff products integrate seamlessly into your daily life, adventures, and travels while
          helping protect the planet.
        </p>
      </div>

      {/* Step-by-Step Use Cases */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Buff Wipes: On-the-Go Freshness</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Pack in your bag"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Pack</h3>
              <p className="text-muted-foreground">
                Slip our compact Buff Wipes into your backpack, purse, or pocket. They take up minimal space and are
                ready whenever you need them.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Use when needed"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Use</h3>
              <p className="text-muted-foreground">
                Whether you're hiking, traveling, or just need a quick refresh, our wipes provide effective cleansing
                without harsh chemicals.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Dispose responsibly"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Dispose</h3>
              <p className="text-muted-foreground">
                Unlike conventional wipes, Buff Wipes biodegrade naturally in 4-6 weeks. Dispose in compost or trash
                without worrying about environmental impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Natural Soap Bars: Plastic-Free Cleansing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Store in travel container"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Store</h3>
              <p className="text-muted-foreground">
                Keep your soap bar in our bamboo travel container between uses to maintain freshness and prevent mess in
                your luggage.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=200&width=300" alt="Lather and use" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lather</h3>
              <p className="text-muted-foreground">
                Our soap bars create a rich lather that cleanses effectively. They're gentle on skin and safe for use in
                natural water sources.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Let dry between uses"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Dry</h3>
              <p className="text-muted-foreground">
                Allow your soap to dry between uses to extend its life. One bar can last for weeks of regular use,
                replacing multiple plastic bottles.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Comparison to Conventional Products */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Why Choose NatureBuff?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Conventional Products</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-muted-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                    <span className="block h-2 w-2 rounded-full bg-muted-foreground"></span>
                  </span>
                  <span>Contain synthetic materials that take 100+ years to break down</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-muted-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                    <span className="block h-2 w-2 rounded-full bg-muted-foreground"></span>
                  </span>
                  <span>Often packaged in single-use plastics</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-muted-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                    <span className="block h-2 w-2 rounded-full bg-muted-foreground"></span>
                  </span>
                  <span>May contain harsh chemicals that harm aquatic ecosystems</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-muted-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                    <span className="block h-2 w-2 rounded-full bg-muted-foreground"></span>
                  </span>
                  <span>Contribute to landfill waste and ocean pollution</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-muted-foreground/20 rounded-full p-1 mr-3 mt-0.5">
                    <span className="block h-2 w-2 rounded-full bg-muted-foreground"></span>
                  </span>
                  <span>Often tested on animals</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center">NatureBuff Products</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Made from biodegradable materials that break down in 4-6 weeks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Packaged in compostable or recyclable materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Formulated with natural ingredients safe for all environments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Zero waste approach to reduce environmental impact</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>Cruelty-free and never tested on animals</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Biodegradation Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Biodegradation Timeline</h2>
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-1/2 -ml-0.5 w-1 bg-primary/20"></div>
          <div className="grid grid-cols-1 gap-8">
            <div className="relative pl-8 md:ml-[50%]">
              <div className="absolute left-0 md:left-[-12px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">1</span>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm border">
                <h3 className="font-bold">Week 1</h3>
                <p className="text-muted-foreground">
                  Buff Wipes begin to break down as natural microorganisms start the decomposition process.
                </p>
              </div>
            </div>
            <div className="relative pr-8 md:mr-[50%] md:text-right">
              <div className="absolute right-0 md:right-[-12px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">2</span>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm border">
                <h3 className="font-bold">Weeks 2-3</h3>
                <p className="text-muted-foreground">
                  The bamboo fibers continue to decompose, breaking down into smaller components.
                </p>
              </div>
            </div>
            <div className="relative pl-8 md:ml-[50%]">
              <div className="absolute left-0 md:left-[-12px] top-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">3</span>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm border">
                <h3 className="font-bold">Weeks 4-6</h3>
                <p className="text-muted-foreground">
                  Complete biodegradation occurs, leaving no trace and returning to the earth as natural elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-accent-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Make the Switch?</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join thousands of customers who've already made the transition to sustainable hygiene with NatureBuff.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Shop Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </div>
  )
}

