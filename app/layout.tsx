import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

// Load Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// Load Forta font for headings
const forta = localFont({
  src: [
    {
      path: "../public/fonts/Forta-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Forta-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Forta-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-forta",
})

export const metadata: Metadata = {
  title: "NatureBuff - Sustainable Hygiene for the Wild at Heart",
  description:
    "Eco-friendly, biodegradable hygiene products for adventurers, travelers, and eco-conscious individuals.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} ${forta.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'