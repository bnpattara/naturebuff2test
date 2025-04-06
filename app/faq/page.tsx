import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our products, shipping, and sustainability practices.
        </p>
      </div>

      <Tabs defaultValue="products" className="max-w-3xl mx-auto">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
          <TabsTrigger value="orders">Orders & Returns</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long do Buff Wipes take to biodegrade?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Our Buff Wipes are made from 100% biodegradable bamboo fiber and will naturally break down in 4-6
                  weeks in compost or soil conditions. This is significantly faster than conventional wipes, which can
                  take 100+ years to decompose due to their plastic content.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Are your soap bars safe for use in lakes and rivers?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, our soap bars are formulated with biodegradable, plant-based ingredients that are safe for use in
                  natural water sources. They don't contain harmful chemicals like parabens, sulfates, or synthetic
                  fragrances that can damage aquatic ecosystems. However, we still recommend using them at least 200
                  feet away from water sources when possible, following Leave No Trace principles.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What scents are available for your products?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Our Buff Wipes come in Unscented, Lavender, and Eucalyptus varieties. Our soap bars are available in
                  Unscented, Lavender, Eucalyptus, and Citrus. All scented products use essential oils rather than
                  synthetic fragrances.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Are your products suitable for sensitive skin?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, our products are formulated to be gentle on all skin types. For those with particularly sensitive
                  skin, we recommend starting with our Unscented varieties. All our products are free from harsh
                  chemicals, artificial fragrances, and common irritants. If you have specific allergies or concerns,
                  please check the full ingredients list on each product page.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How long does one soap bar typically last?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  With regular use, our standard-sized soap bars (3.5oz/100g) typically last 3-4 weeks. To extend the
                  life of your soap, we recommend keeping it in a dry place between uses and using our bamboo soap dish
                  or travel container to allow proper drainage.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="shipping">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are your shipping options?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We offer standard shipping (3-5 business days), expedited shipping (2-3 business days), and overnight
                  shipping options. Standard shipping is free on all orders over $35. International shipping is
                  available to select countries with delivery times varying by destination.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is your packaging eco-friendly?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, we use 100% plastic-free packaging for all our shipments. Our boxes are made from recycled
                  cardboard, our padding materials are compostable, and we use paper tape. Product packaging is either
                  compostable (for wipes) or recyclable (for soap bars).
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, we currently ship to Canada, the UK, EU countries, Australia, and New Zealand. International
                  shipping rates are calculated at checkout based on weight and destination. Please note that customers
                  are responsible for any import duties or taxes that may apply.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How do you offset the carbon footprint of shipping?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We partner with a carbon offset program that calculates the emissions from each shipment and invests
                  in verified environmental projects to neutralize the impact. These projects include reforestation,
                  renewable energy, and methane capture initiatives. There's no additional cost to customers for this
                  service.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="sustainability">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What makes your products more sustainable than conventional options?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Our products are designed with a full lifecycle approach to sustainability. We use rapidly renewable
                  materials like bamboo instead of tree pulp or synthetic fibers, our ingredients are biodegradable and
                  safe for aquatic environments, and our packaging is plastic-free and either compostable or recyclable.
                  Conventional hygiene products often contain plastic fibers, synthetic chemicals, and come in
                  single-use plastic packaging.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do you source your ingredients?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We carefully select suppliers who share our commitment to sustainability and ethical practices. Our
                  bamboo comes from FSC-certified forests that don't contribute to deforestation or habitat destruction.
                  Essential oils and other plant-based ingredients are sourced from organic farms whenever possible. We
                  regularly audit our supply chain to ensure compliance with our standards.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Are your products certified by any third-party organizations?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, our products have received certification from several independent organizations. Our bamboo is
                  FSC-certified, our soap bars are USDA Organic certified, and all products are Leaping Bunny certified
                  cruelty-free. We're also a 1% for the Planet member, donating 1% of annual sales to environmental
                  nonprofits.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What's the best way to dispose of used Buff Wipes?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  The ideal disposal method is home composting, where our wipes will break down in 4-6 weeks. If
                  composting isn't available, they can go in regular trash where they'll still biodegrade much faster
                  than conventional wipes. Please note that even though our wipes are biodegradable, they should never
                  be flushed down toilets as they can still cause clogs in plumbing systems.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="orders">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do you offer subscriptions?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, we offer flexible subscription options for all our products. You can choose delivery frequencies
                  of every 1, 2, or 3 months. Subscribers receive a 15% discount on all products, free shipping, and can
                  pause, skip, or cancel at any time with no fees. You can manage your subscription through your account
                  dashboard.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  We offer a 30-day satisfaction guarantee on all products. If you're not completely satisfied, you can
                  return unused items in their original packaging for a full refund. For hygiene reasons, we cannot
                  accept returns of opened or used products unless they're defective. Please contact our customer
                  service team to initiate a return.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I track my order?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Once your order ships, you'll receive an email with tracking information. You can also view order
                  status and tracking details in your account dashboard. If you checked out as a guest, you can use the
                  order tracking tool on our website by entering your order number and email address.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you offer wholesale options?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Yes, we offer wholesale pricing for retailers, outdoor outfitters, eco-friendly stores, and
                  hospitality businesses. We require a minimum order value of $500 for first-time wholesale orders.
                  Please contact our wholesale team at wholesale@naturebuff.com for more information and to apply for a
                  wholesale account.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Our customer service team is here to help. Reach out to us and we'll get back to you as soon as possible.
        </p>
        <Button size="lg">
          <a href="/contact">Contact Us</a>
        </Button>
      </div>
    </div>
  )
}

