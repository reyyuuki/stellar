import { Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Footer() {
  return (
    <footer className="border-t">
        <div
          className="container flex flex-col gap-8 py-12 px-5 md:flex-row md:items-start md:justify-between md:py-16">
          <div className="flex flex-col gap-4 md:w-1/3">
            <Link className="flex items-center space-x-2" href="#">
              <Sparkles className="h-6 w-6" />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Stellar</span>
            </Link>
            <p className="text-sm text-muted-foreground md:text-left">
              Redefining fashion with timeless elegance and contemporary style.
            </p>
            <div className="flex gap-4">
              <Link className="rounded-full p-2 hover:bg-muted transition-colors" href="#">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link className="rounded-full p-2 hover:bg-muted transition-colors" href="#">
                <FacebookIcon className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link className="rounded-full p-2 hover:bg-muted transition-colors" href="#">
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:w-2/3">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Shop</h3>
              <ul className="space-y-2 text-sm">
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">New Arrivals</Link></li>
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">Best Sellers</Link></li>
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">Sale</Link></li>
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">Collections</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">FAQs</Link></li>
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">Shipping</Link></li>
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">Returns</Link></li>
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">Contact Us</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">About Us</Link></li>
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">Careers</Link></li>
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">Press</Link></li>
                <li><Link
                  className="transition-colors hover:text-foreground/80 text-foreground/60"
                  href="#">Affiliates</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div
            className="container flex flex-col gap-4 py-8 px-5 md:flex-row md:items-center md:justify-between md:py-6">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © 2024 Stellar. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 md:justify-start">
              <Link
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                href="#">
                Privacy Policy
              </Link>
              <Link
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                href="#">
                Terms of Service
              </Link>
              <Link
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                href="#">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

function TwitterIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path
          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>)
    );
  }
  
  function FacebookIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>)
    );
  }
  
  function InstagramIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>)
    );
  }

export default Footer