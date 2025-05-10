import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo, LogoLarge } from "@/components/logo"
import { ArrowRight, Scissors, Users, TrendingUp, Sparkles, DollarSign, Music2, Twitch } from "lucide-react"
import Image from "next/image"
import CreatorWorkflowCarousel from '@/components/CreatorWorkflowCarousel'
import { ClipperCarousel } from "@/components/ui/clipper-carousel"
import { SplitFeatureCarousel } from "@/components/ui/SplitFeatureCarousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* High-tech animated background */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0f1020] via-[#1a1440] to-[#2d1a60] opacity-95" />
        {/* SVG tech lines and glow */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} width="100%" height="100%" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glow" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9147ff" stopOpacity="0.3" />
              <stop offset="1" stopColor="#00eaff" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path d="M0 400 Q 720 200 1440 400" stroke="url(#glow)" strokeWidth="6" fill="none" filter="url(#shadow)" />
          <circle cx="720" cy="300" r="180" fill="url(#glow)" opacity="0.08" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="py-32 flex items-center justify-center min-h-[70vh] bg-transparent">
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-12 flex items-center justify-center">
                <span className="flex items-center gap-4">
                  <Scissors className="h-16 w-16 md:h-24 md:w-24 drop-shadow-[0_0_24px_#a259ffcc]" style={{ color: '#a259ff' }} />
                  <span className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-[#a259ff] via-[#9147ff] to-[#e05cff] bg-clip-text text-transparent drop-shadow-[0_0_24px_#a259ffcc]">
                    ClipFarm
                  </span>
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-6 leading-tight bg-gradient-to-r from-[#00eaff] via-[#9147ff] to-[#00eaff] bg-clip-text text-transparent animate-gradient-x">
                <span className="block">The Future of</span>
                <span className="block">Viral Content Creation</span>
              </h1>
              <div className="text-lg md:text-2xl text-center text-[#b3baff] font-mono mb-8 max-w-2xl">
                AI-powered, community-driven, and built for the next generation of creators and clippers.
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild size="lg" className="relative px-12 py-5 rounded-full bg-gradient-to-r from-[#00eaff] via-[#9147ff] to-[#00eaff] text-white font-bold shadow-2xl border-0 hover:from-[#9147ff] hover:to-[#00eaff] transition-colors overflow-hidden animate-pulse-glow">
                  <Link href="/jobs" className="relative z-10 text-white overflow-hidden">
                    Start Clip Farming
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Creators Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#18122b]/90 to-[#2d1a60]/80 backdrop-blur-md border-t border-[#9147ff]/20 shadow-2xl">
          <svg className="absolute top-0 left-0 w-full" height="32" viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 32 Q 720 0 1440 32" stroke="#9147ff33" strokeWidth="4" fill="none" />
          </svg>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-12 drop-shadow-[0_2px_8px_#0008]">For Creators</h2>

            {/* Revolutionary Content Distribution */}
            <div className="mb-16 text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 pt-6 pb-4 leading-relaxed bg-gradient-to-r from-[#00eaff] via-[#9147ff] to-[#00eaff] bg-clip-text text-transparent">
                Revolutionizing Content Distribution
              </h3>
              <div className="mb-16 text-center">
                <p className="text-xl md:text-2xl text-[#b3baff] mb-12 max-w-3xl mx-auto leading-relaxed">
                  Imagine reaching millions of viewers without having to produce new content. Instantly transform your audience into a powerful team of promoters—all without any upfront expenses.
                </p>
              </div>
            </div>

            {/* Lacy and Young Thug Cards */}
            <div className="mb-16 flex flex-col md:flex-row justify-center gap-8">
              {/* Faze Lacy Card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#ff471a] relative w-[340px]">
                <div className="w-full h-64 relative">
                  <Image
                    src="/lacy.png"
                    alt="Faze Lacy"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="bg-black text-white p-6 flex flex-col items-start gap-3 rounded-b-2xl">
                  <h3 className="text-2xl font-extrabold mb-1">Faze Lacy</h3>
                  <p className="text-base text-[#b3baff] mb-2">Every month Lacy creates a 5k-20k tournament pot and generates millions of views</p>
                </div>
              </div>
              {/* Young Thug Card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#1a1a1a] relative w-[340px]">
                <div className="w-full h-64 relative">
                  <Image
                    src="/young_thug_in_2021.png"
                    alt="Young Thug"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <div className="bg-black text-white p-6 flex flex-col items-start gap-3 rounded-b-2xl">
                  <h3 className="text-2xl font-extrabold mb-1">Young Thug</h3>
                  <p className="text-base text-[#b3baff] mb-2">Young Thug spends $300 per 1 million views. Media using his music generated millions of views.</p>
                </div>
              </div>
            </div>

            {/* After image cards */}
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-[#b3baff] leading-relaxed">
                The biggest streamers, YouTubers, and musicians did not get lucky. They realized that the sure-fire way to broadcast their content to the masses is to leverage the masses.
                <br />
                <span className="block mt-4">
                  This is the <span className="font-bold bg-gradient-to-r from-[#00eaff] via-[#9147ff] to-[#a259ff] bg-clip-text text-transparent">new age</span> of content creation – the only way to <span className="font-bold bg-gradient-to-r from-[#00eaff] via-[#9147ff] to-[#a259ff] bg-clip-text text-transparent">not get left behind</span>.
                </span>
              </p>
              <div className="flex flex-col items-center mt-8">
                <span className="text-6xl md:text-7xl font-extrabold text-[#b3baff] -rotate-6 select-none" style={{ display: 'inline-block', textDecoration: 'line-through', textDecorationColor: 'black', textDecorationThickness: '12px' }}>
                  Luck
                </span>
              </div>
            </div>

            {/* Main Benefits Grid */}
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mb-16">
              {[
                {
                  icon: (
                    <svg className="h-10 w-10" viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="84" cy="84" r="84" fill="#1DB954" />
                      <path d="M120.1 115.2c-1.7 2.8-5.3 3.7-8.1 2-22.1-13.5-49.9-16.5-82.6-8.9-3.2.7-6.4-1.3-7.1-4.5-.7-3.2 1.3-6.4 4.5-7.1 35.6-8.1 66.2-4.7 91.1 10.1 2.8 1.7 3.7 5.3 2 8.1zm11.6-23.2c-2.1 3.4-6.5 4.5-9.9 2.4-25.3-15.5-63.9-20-93.8-10.7-3.8 1.1-7.8-1.1-8.9-4.8-1.1-3.8 1.1-9.5 5.7-10.9 33.9-10.2 76.1-5.3 104.6 12.1 3.4 2.1 4.5 6.5 2.4 9.9zm12.2-25.1c-2.5 4-7.8 5.3-11.8 2.8-28.9-17.7-77.7-19.3-105.1-10.3-4.6 1.4-9.5-1.1-10.9-5.7-1.4-4.6 1.1-9.5 5.7-10.9 31.6-9.7 85.2-8 117.2 11.3 4 2.5 5.3 7.8 2.8 11.8z" fill="#191414"/>
                    </svg>
                  ),
                  bg: 'bg-white',
                  title: 'Promote Your Music',
                  desc: 'Get your tracks discovered by a wider audience with viral short-form clips.'
                },
                {
                  icon: <Twitch className="h-8 w-8 text-white" />, bg: 'bg-gradient-to-br from-[#9147ff] to-purple-500',
                  title: 'Promote Your Streams & Videos',
                  desc: 'Turn your Twitch streams, YouTube videos, and other long form content into viral clips to grow your channel.'
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-white" />, bg: 'bg-gradient-to-br from-blue-400 to-purple-400',
                  title: 'AI-Powered Clipping',
                  desc: 'Use our AI to control how your content is clipped and automatically verify clips.'
                },
                {
                  icon: <DollarSign className="h-8 w-8 text-white" />, bg: 'bg-gradient-to-br from-green-400 to-blue-500',
                  title: 'Flexible Payment Options',
                  desc: 'Choose between Pay Per View or Tournament Pot structures to best fit your campaign goals.'
                },
                {
                  icon: <Scissors className="h-8 w-8 text-white" />, bg: 'bg-gradient-to-br from-primary to-purple-400',
                  title: 'And More...',
                  desc: 'Leverage a community of talented clippers, detailed analytics, and a platform built for creators.'
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative bg-white/10 backdrop-blur-md rounded-2xl px-6 py-6 flex flex-col gap-3 group hover:scale-[1.025] transition-transform min-h-[200px] min-w-[340px] border-2 border-transparent bg-clip-padding"
                  style={{
                    boxShadow: '0 0 24px 4px #7f9cf5, 0 0 48px 8px #9147ff33',
                    borderImage: 'linear-gradient(90deg, #00eaff 0%, #9147ff 100%) 1',
                  }}
                >
                  <span className={`rounded-full p-3 ${item.bg} shadow-lg flex items-center justify-center w-fit mb-2`}>{item.icon}</span>
                  <h3 className="font-bold text-xl text-white mb-1 drop-shadow-[0_2px_8px_#0008]">{item.title}</h3>
                  <p className="text-[#c7c7e6] text-base leading-relaxed drop-shadow-[0_2px_8px_#0008]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CreatorWorkflowCarousel />

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#1a1440]/90 to-[#2d1a60]/90 backdrop-blur-md border-t border-[#9147ff]/20 shadow-2xl">
          {/* SVG divider at the top */}
          <svg className="absolute top-0 left-0 w-full" height="32" viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 32 Q 720 0 1440 32" stroke="#9147ff33" strokeWidth="4" fill="none" />
          </svg>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center rounded-2xl bg-white/5 border border-[#9147ff]/30 shadow-xl p-12 backdrop-blur-md">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_#0008]">Ready to Grow Your Content?</h2>
              <p className="text-xl text-[#c7c7e6] mb-8 drop-shadow-[0_2px_8px_#0008]">
                Join thousands of creators who are already using <span className="text-[#b388ff] font-bold">ClipFarm</span> to expand their reach.
              </p>
              <Button asChild size="lg" className="relative overflow-hidden px-10 py-4 rounded-full bg-gradient-to-r from-[#a259ff] via-[#9147ff] to-[#e05cff] text-white font-bold shadow-2xl border-0 hover:from-[#9147ff] hover:to-[#e05cff] transition-colors animate-pulse-glow">
                <Link href="/signup" className="overflow-hidden">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Clippers Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#18122b]/90 to-[#2d1a60]/80 backdrop-blur-md border-t border-[#9147ff]/20 shadow-2xl">
          <svg className="absolute top-0 left-0 w-full" height="32" viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 32 Q 720 0 1440 32" stroke="#9147ff33" strokeWidth="4" fill="none" />
          </svg>
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <h2 className="text-3xl font-bold text-center text-white mb-12 drop-shadow-[0_2px_8px_#0008]">For Clippers</h2>
            {/* <ClipperCarousel /> */}
            <div className="mt-12">
              <SplitFeatureCarousel />
            </div>
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 mt-12">
              {[
                {
                  icon: (
                    <DollarSign className="h-8 w-8 text-white" />
                  ), bg: 'bg-gradient-to-br from-green-500 to-blue-500',
                  title: 'Guaranteed & Immediate Payments',
                  desc: 'Get paid instantly for your work—no waiting, no hassle.'
                },
                {
                  icon: (
                    <Users className="h-8 w-8 text-white" />
                  ), bg: 'bg-gradient-to-br from-purple-500 to-pink-500',
                  title: 'Access to Every Creator',
                  desc: 'Browse and join campaigns from every creator on one unified platform.'
                },
                {
                  icon: (
                    <Sparkles className="h-8 w-8 text-white" />
                  ), bg: 'bg-gradient-to-br from-yellow-400 to-orange-500',
                  title: 'One-Time Account Verification',
                  desc: 'Streamlined onboarding—verify your account once and start clipping.'
                },
                {
                  icon: (
                    <TrendingUp className="h-8 w-8 text-white" />
                  ), bg: 'bg-gradient-to-br from-blue-500 to-indigo-500',
                  title: 'Endorsement Deals',
                  desc: 'Unlock endorsement deals and sponsorships from top companies.'
                },
                {
                  icon: (
                    <Scissors className="h-8 w-8 text-white" />
                  ), bg: 'bg-gradient-to-br from-primary to-purple-400',
                  title: 'And More...',
                  desc: 'Enjoy a supportive community, analytics, and tools built for clippers.'
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative bg-white/10 backdrop-blur-md rounded-2xl px-6 py-6 flex flex-col gap-3 group hover:scale-[1.025] transition-transform min-h-[200px] min-w-[340px] border-2 border-transparent bg-clip-padding"
                  style={{
                    boxShadow: '0 0 24px 4px #7f9cf5, 0 0 48px 8px #9147ff33',
                    borderImage: 'linear-gradient(90deg, #00eaff 0%, #9147ff 100%) 1',
                  }}
                >
                  <span className={`rounded-full p-2 md:p-3 ${item.bg} shadow-lg flex items-center justify-center w-fit mb-2`}>{item.icon}</span>
                  <div className="font-bold text-base md:text-lg text-white mb-1 drop-shadow-[0_2px_8px_#0008]">{item.title}</div>
                  <div className="text-[#c7c7e6] text-sm md:text-base leading-snug drop-shadow-[0_2px_8px_#0008]">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clippers CTA Section */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#1a1440]/90 to-[#2d1a60]/90 backdrop-blur-md border-t border-[#9147ff]/20 shadow-2xl">
          <svg className="absolute top-0 left-0 w-full" height="32" viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 32 Q 720 0 1440 32" stroke="#9147ff33" strokeWidth="4" fill="none" />
          </svg>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-[0_2px_8px_#0008]">Ready to Start Clipping?</h2>
              <p className="text-xl text-[#c7c7e6] mb-8 drop-shadow-[0_2px_8px_#0008]">
                Join the ClipFarm community and start earning from your editing skills today.
              </p>
              <Button asChild size="lg" className="relative overflow-hidden px-10 py-4 rounded-full bg-gradient-to-r from-[#a259ff] via-[#9147ff] to-[#e05cff] text-white font-bold shadow-2xl border-0 hover:from-[#9147ff] hover:to-[#e05cff] transition-colors animate-pulse-glow">
                <Link href="/clipper/dashboard" className="overflow-hidden">
                  Start Clipping <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
