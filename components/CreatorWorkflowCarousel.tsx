"use client";

import { useState } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/createNewCampaign.png',
    alt: 'Create New Campaign',
    label: 'Create a New Campaign',
  },
  {
    src: '/creatorDashboard.png',
    alt: 'Creator Dashboard',
    label: 'Your Dashboard',
  },
  {
    src: '/analyticsCampaign.png',
    alt: 'Campaign Analytics',
    label: 'Campaign Analytics',
  },
  {
    src: '/generalAnalytics.png',
    alt: 'General Analytics',
    label: 'General Analytics',
  },
];

export default function CreatorWorkflowCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="w-full flex flex-col items-center mt-20">
      <div className="relative flex justify-center w-full">
        <div
          className="relative w-[1200px] aspect-[16/7] rounded-3xl overflow-hidden shadow-2xl bg-transparent"
        >
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#9147ff]/80 text-white rounded-full p-2 z-10 shadow-lg"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#9147ff]/80 text-white rounded-full p-2 z-10 shadow-lg"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
      {/* Label */}
      <div className="mt-6 text-lg md:text-xl font-semibold text-white drop-shadow-[0_2px_8px_#0008]">
        {images[current].label}
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full border-2 ${i === current ? 'bg-[#9147ff] border-[#9147ff]' : 'bg-white/30 border-white/30'} transition-all`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 