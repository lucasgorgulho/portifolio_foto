"use client"

import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Gallery } from "@/components/Gallery"
import { Services } from "@/components/Services"
import { Pricing } from "@/components/Pricing"
import { BeforeAfter } from "@/components/BeforeAfter"
import { Testimonials } from "@/components/Testimonials"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Pricing />
      <BeforeAfter />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
