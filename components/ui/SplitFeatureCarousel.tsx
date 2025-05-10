"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const carouselImages = [
  {
    src: "/browseCampaign.png",
    alt: "Browse Campaigns",
    title: "Browse Campaigns",
    description: "Find and join campaigns that match your content style"
  },
  {
    src: "/trackClips.png",
    alt: "Track Your Clips",
    title: "Track Your Clips",
    description: "Monitor your clip performance and engagement"
  },
  {
    src: "/Earnings.png",
    alt: "Track Earnings",
    title: "Track Earnings",
    description: "View and manage your earnings from successful clips"
  }
]

export function SplitFeatureCarousel() {
  const [current, setCurrent] = React.useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? carouselImages.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === carouselImages.length - 1 ? 0 : c + 1))

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-12">
      {/* Left: Image/Card */}
      <div className="w-full md:w-1/2 flex items-center justify-center min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={carouselImages[current].src}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative w-[700px] h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#9147ff] to-[#00eaff]"
          >
            <Image
              src={carouselImages[current].src}
              alt={carouselImages[current].alt}
              fill
              className="object-contain rounded-3xl bg-white"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Right: Text/Description */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-6 px-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">{carouselImages[current].title}</h2>
          <p className="text-lg text-[#e0e0ff] mb-6 max-w-xl drop-shadow-md">{carouselImages[current].description}</p>
        </div>
        <div className="flex gap-4 mt-2">
          <button
            onClick={prev}
            className="rounded-full bg-white/10 hover:bg-white/20 p-3 text-white shadow-lg transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="rounded-full bg-white/10 hover:bg-white/20 p-3 text-white shadow-lg transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        {/* Dots Navigation */}
        <div className="flex gap-2 mt-4">
          {carouselImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full border-2 ${i === current ? 'bg-[#9147ff] border-[#9147ff]' : 'bg-white/30 border-white/30'} transition-all`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 