import Image from "next/image"
import { Leaf, Recycle, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="absolute inset-0 bg-black/40 z-10 rounded-lg" />
        <div className="relative h-[40vh] w-full rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Nature landscape"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              How NatureBuff is changing the world of sustainable hygiene, one product at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">How It All Started</h2>
            <p className="text-muted-foreground mb-4">
              NatureBuff was born from a simple observation during a hiking trip in 2018. Our founder, Max Velinsky,
              noticed the amount of non-biodegradable waste left behind on trails – particularly wet wipes and plastic
              containers from hygiene products.
            </p>
            <p className="text-muted-foreground mb-4">
              Inspired to make a change, Max began researching sustainable alternatives to conventional hygiene
              products. He discovered that bamboo-based wipes could provide the same convenience without the
              environmental impact, and that natural soap bars could eliminate the need for plastic bottles.
            </p>
            <p className="text-muted-foreground">
              After two years of development and testing, NatureBuff launched its first products in 2020. Today, we're
              proud to offer a growing range of sustainable hygiene solutions that help outdoor enthusiasts, travelers,
              and eco-conscious individuals reduce their environmental footprint without sacrificing cleanliness or
              convenience.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Founder hiking in nature"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section id="team" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet the Founder</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
            <Image src="/placeholder.svg?height=200&width=200" alt="Max Velinsky" fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Max Velinsky</h3>
            <p className="text-accent font-medium mb-4">Founder & CEO</p>
            <p className="text-muted-foreground mb-4">
              Max is an avid hiker, environmentalist, and entrepreneur with a background in sustainable product
              development. Before founding NatureBuff, he worked in the outdoor industry for over a decade, where he
              witnessed firsthand the impact of non-biodegradable products on natural environments.
            </p>
            <p className="text-muted-foreground">
              "I believe that small changes in our daily habits can lead to significant positive impacts on our planet.
              At NatureBuff, we're committed to making those changes easier and more accessible for everyone who loves
              the outdoors as much as we do."
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section id="sustainability" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Sustainability Commitment</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Materials</h3>
              <p className="text-muted-foreground">
                Our Buff Wipes are made from 100% biodegradable bamboo fiber, which grows quickly without pesticides and
                requires minimal water. Our soap bars use organic, plant-based ingredients that are safe for both you
                and the environment.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Recycle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Zero Waste Packaging</h3>
              <p className="text-muted-foreground">
                We've eliminated plastic from our packaging. Our products come in compostable or recyclable materials,
                and we're constantly working to reduce our packaging footprint even further.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Environmental Impact</h3>
              <p className="text-muted-foreground">
                For every purchase, we donate 1% of sales to environmental nonprofits working to protect wild places. We
                also organize quarterly clean-up events in national parks and wilderness areas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent text-accent-foreground rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Ready to make the switch to sustainable hygiene? Explore our products and join thousands of customers who are
          reducing their environmental impact without compromising on cleanliness.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Shop Now
        </Button>
      </section>
    </div>
  )
}

