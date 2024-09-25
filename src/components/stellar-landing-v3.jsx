"use client";
import  React, { useEffect, useState } from "react"
import { ArrowRight, Star, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LimitedProduts } from "@/hooks/fetchapi"

export function StellarLandingV3() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const result = await LimitedProduts(4);
        if (result) {
          setData(result);
          console.log(result);
        }
      } catch {
        console.log("error when fetching");
      }
    }
    fetching();
  }, []);

  return (
    (<div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Stellar Style
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Elevate your wardrobe with our curated collection. Redefine fashion with Stellar sophistication.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Lookbook
                  </Button>
                </div>
              </div>
              <div className="lg:order-last">
                <img
                  alt="Hero product"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height={310}
                  src=	"https://i.imgur.com/Qphac99.jpeg"
                  width={550} />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className=" px-4 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Featured Collections
            </h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="new">New Arrivals</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="sale">Sale</TabsTrigger>
              </TabsList>
              <TabsContent
                value="all"
                className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center">
                {data && data.map((item, index) => (
                  <Card key={index}>
                    <CardHeader className="p-0">
                      <img
                        alt={`Product ${index + 1}`}
                        className="object-cover w-full aspect-[4/3]"
                        height={300}
                        src={item.category.image}
                        width={400} />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="line-clamp-1">{item.title}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">{item.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Button className="w-full font-bold">Add to Cart</Button>
                    </CardFooter>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose Stellar
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Star, title: "Premium Quality", description: "Crafted with the finest materials for lasting elegance" },
                { icon: TrendingUp, title: "Latest Trends", description: "Stay ahead with our cutting-edge designs" },
                { icon: Zap, title: "Fast Delivery", description: "Enjoy free express shipping on all orders" },
              ].map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div
                      className="p-2 w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-10 md:px-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Alex Johnson", role: "Fashion Blogger", content: "Stellar has completely transformed my wardrobe. The quality and style are unmatched!" },
                { name: "Sam Lee", role: "Stylist", content: "As a professional stylist, I always recommend Stellar to my clients. Their pieces are versatile and timeless." },
                { name: "Taylor Swift", role: "Customer", content: "I love how Stellar combines comfort with elegance. It's my go-to brand for both casual and formal wear." },
              ].map((testimonial, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={`/placeholder-avatar-${i + 1}.svg`} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle>{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{testimonial.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay in Style</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Subscribe to our newsletter for exclusive deals, style tips, and new arrivals.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>)
  );
}

