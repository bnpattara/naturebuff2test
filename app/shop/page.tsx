import Image from "next/image"
import { Filter } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ShopPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Shop</h1>
          <p className="text-muted-foreground">Browse our collection of sustainable hygiene products</p>
        </div>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="md:hidden">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="px-1">
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <Separator className="my-4" />
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Product Type</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="wipes" />
                        <Label htmlFor="wipes">Buff Wipes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="soap" />
                        <Label htmlFor="soap">Soap Bars</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="accessories" />
                        <Label htmlFor="accessories">Accessories</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="under-20" />
                        <Label htmlFor="under-20">Under $20</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="20-50" />
                        <Label htmlFor="20-50">$20 - $50</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="over-50" />
                        <Label htmlFor="over-50">Over $50</Label>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="font-medium mb-3">Scent</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="unscented" />
                        <Label htmlFor="unscented">Unscented</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="lavender" />
                        <Label htmlFor="lavender">Lavender</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="eucalyptus" />
                        <Label htmlFor="eucalyptus">Eucalyptus</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="citrus" />
                        <Label htmlFor="citrus">Citrus</Label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end gap-2">
                  <Button variant="outline">Reset</Button>
                  <Button>Apply Filters</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Select defaultValue="featured">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]">
        <div className="hidden md:block">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="font-medium mb-3">Product Type</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="desktop-wipes" />
                  <Label htmlFor="desktop-wipes">Buff Wipes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desktop-soap" />
                  <Label htmlFor="desktop-soap">Soap Bars</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desktop-accessories" />
                  <Label htmlFor="desktop-accessories">Accessories</Label>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="desktop-under-20" />
                  <Label htmlFor="desktop-under-20">Under $20</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desktop-20-50" />
                  <Label htmlFor="desktop-20-50">$20 - $50</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desktop-over-50" />
                  <Label htmlFor="desktop-over-50">Over $50</Label>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium mb-3">Scent</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="desktop-unscented" />
                  <Label htmlFor="desktop-unscented">Unscented</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desktop-lavender" />
                  <Label htmlFor="desktop-lavender">Lavender</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desktop-eucalyptus" />
                  <Label htmlFor="desktop-eucalyptus">Eucalyptus</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desktop-citrus" />
                  <Label htmlFor="desktop-citrus">Citrus</Label>
                </div>
              </div>
            </div>
            <Separator />
            <Button variant="outline" className="w-full">
              Reset Filters
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Product 1 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Buff Wipes - Original"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">
                <Link href="/shop/buff-wipes" className="hover:text-naturebuff-green transition-colors">
                  Buff Wipes - Original
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">Biodegradable bamboo wipes</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-medium">$12.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>

          {/* Product 2 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Buff Wipes - Travel Pack"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">Buff Wipes - Travel Pack</h3>
              <p className="text-sm text-muted-foreground">10-pack for on-the-go</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-medium">$8.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>

          {/* Product 3 */}
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
              <h3 className="font-semibold">Eucalyptus Soap Bar</h3>
              <p className="text-sm text-muted-foreground">Refreshing natural soap</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-medium">$9.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>

          {/* Product 4 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Lavender Soap Bar"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">Lavender Soap Bar</h3>
              <p className="text-sm text-muted-foreground">Calming natural soap</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-medium">$9.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>

          {/* Product 5 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Buff Wipes - Family Pack"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">Buff Wipes - Family Pack</h3>
              <p className="text-sm text-muted-foreground">30-pack for the whole family</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-medium">$24.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>

          {/* Product 6 */}
          <Card className="overflow-hidden">
            <div className="relative aspect-square">
              <Image src="/placeholder.svg?height=400&width=400" alt="Citrus Soap Bar" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">Citrus Soap Bar</h3>
              <p className="text-sm text-muted-foreground">Energizing natural soap</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-medium">$9.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

