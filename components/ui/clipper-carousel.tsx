"use client"

import * as React from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "./button"
import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react"

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

export function ClipperCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, containScroll: 'trimSnaps', slidesToScroll: 1 })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on('select', onSelect)
    onSelect()
    return () => {
      if (emblaApi) emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Only render left, center, right cards
  const visibleIndexes = [
    (selectedIndex - 1 + carouselImages.length) % carouselImages.length,
    selectedIndex,
    (selectedIndex + 1) % carouselImages.length
  ]

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      <div className="overflow-visible" ref={emblaRef}>
        <div className="flex items-center justify-center">
          {carouselImages.map((image, index) => {
            if (!visibleIndexes.includes(index)) return null
            const offset = index - selectedIndex
            const isCenter = offset === 0 || (selectedIndex === 0 && index === carouselImages.length - 1 && offset === -1) || (selectedIndex === carouselImages.length - 1 && index === 0 && offset === 1)
            const isLeft = (offset === -1) || (selectedIndex === 0 && index === carouselImages.length - 1)
            const isRight = (offset === 1) || (selectedIndex === carouselImages.length - 1 && index === 0)
            let style = "transition-all duration-500 ease-in-out cursor-pointer relative ";
            if (isCenter) {
              style += "z-30 scale-105 shadow-2xl ";
            } else {
              style += "z-20 scale-95 shadow-lg ";
            }
            return (
              <div
                key={index}
                className={style + " bg-gradient-to-br from-[#9147ff] to-[#00eaff] rounded-3xl w-[320px] h-[420px] flex-shrink-0 flex flex-col items-center justify-between group overflow-hidden mx-4"}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                style={{ boxShadow: isCenter ? '0 8px 32px 0 #9147ff55' : '0 2px 12px 0 #9147ff33' }}
              >
                <div className="flex justify-between items-center w-full px-4 pt-4 z-10">
                  <Heart className="h-6 w-6 text-white/80 hover:text-pink-400 transition-colors" />
                  <Share2 className="h-6 w-6 text-white/80 hover:text-blue-300 transition-colors" />
                </div>
                <div className="relative flex-1 w-full flex items-end justify-center px-4 pb-4">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-2xl"
                      priority={index === 0}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-6 pt-10 bg-gradient-to-t from-[#00eaffcc] via-[#9147ffcc] to-transparent flex flex-col items-start rounded-b-3xl">
                    <h3 className="text-2xl font-extrabold text-white mb-1 tracking-wide drop-shadow-lg">{image.title}</h3>
                    <p className="text-white/90 text-lg drop-shadow-lg">{image.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-40"
        onClick={scrollPrev}
        aria-label="Previous"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white z-40"
        onClick={scrollNext}
        aria-label="Next"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
} 