"use client"

import * as React from "react"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { LimitedProduts } from "@/hooks/fetchapi"

export function LandingPageComponent() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetching = async () => {
      try {
        const result = await LimitedProduts(4);
        if (result) {
          setData(result);
        }
      } catch {
        console.log("error when fetching");
      }
    }
    fetching();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary/20">
     
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48  text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Stellar Style
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    Elevate your wardrobe with our cosmic collection. Redefine fashion with stellar sophistication.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">Shop Now</Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    View Lookbook
                  </Button>
                </div>
              </div>
              <div className="lg:order-last">
                <img
                  alt="Hero product"
                  className="mx-auto aspect-[4/5] overflow-hidden rounded-xl object-cover shadow-2xl"
                  height={600}
                  src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
                  width={480}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Stellar Collections
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data && data.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
                >
                  <img
                    alt={`Featured collection ${index}`}
                    className="object-cover w-full aspect-[4/5]"
                    height={400}
                    src={item.image}
                    width={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity group-hover:opacity-90" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center text-white">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.description.substring(0, 50)}...
                    </p>
                    <Button size="sm" variant="secondary" className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Collection
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose Stellar
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: TruckIcon, title: "Interstellar Shipping", description: "Free express delivery on orders over $100" },
                { icon: ShieldCheckIcon, title: "Secure Transactions", description: "Your data is protected by advanced encryption" },
                { icon: RefreshCwIcon, title: "Easy Returns", description: "30-day hassle-free return policy" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-2 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform hover:scale-105">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay in Orbit</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Subscribe to our newsletter for stellar deals, cosmic style tips, and new arrivals.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gradient-to-t from-background to-secondary/20">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link className="flex items-center justify-center space-x-2 md:justify-start" href="#">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Stellar</span>
            </Link>
            <p className="text-sm text-muted-foreground md:text-left">
              Redefining fashion, one star at a time.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Link className="text-sm hover:text-primary transition-colors" href="#">Terms of Service</Link>
            <Link className="text-sm hover:text-primary transition-colors" href="#">Privacy Policy</Link>
            <Link className="text-sm hover:text-primary transition-colors" href="#">Shipping Info</Link>
            <Link className="text-sm hover:text-primary transition-colors" href="#">FAQs</Link>
          </div>
          <div className="flex gap-4">
            <Link className="rounded-full bg-primary/10 p-2 hover:bg-primary/20 transition-colors" href="#">
              <TwitterIcon className="h-5 w-5 text-primary" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="rounded-full bg-primary/10 p-2 hover:bg-primary/20 transition-colors" href="#">
              <FacebookIcon className="h-5 w-5 text-primary" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="rounded-full bg-primary/10 p-2 hover:bg-primary/20 transition-colors" href="#">
              <InstagramIcon className="h-5 w-5 text-primary" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800">
          <div className="container flex items-center justify-between py-4 text-sm">
            <p>© 2024 Stellar. All rights reserved.</p>
            <p>Crafted with ♥ by Stellar Team</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ShieldCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function RefreshCwIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v6h6" />
      <path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
      <path d="M21 22v-6h-6" />
      <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
    </svg>
  )
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
      <path d="M14 17h1" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}