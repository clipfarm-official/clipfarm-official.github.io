import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo, LogoLarge } from "@/components/logo"
import { ArrowRight, Scissors, Users, TrendingUp, Sparkles, DollarSign, Music2, Twitch } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* Subtle purple haze background */}
      <div className="pointer-events-none select-none absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full" style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(110,39,182,0.08) 0%, rgba(110,39,182,0.03) 70%, transparent 100%)',
        }} />
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="py-24 flex items-center justify-center min-h-[60vh] bg-background">
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-16">
                <span className="block">
                  <LogoLarge />
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 drop-shadow-lg leading-tight">
                <span className="block text-black">
                  Transforming Content into
                </span>
                <span className="block text-primary">
                  <span className="glossy-text inline-block">Viral Clips</span>
                </span>
              </h1>
              <div className="flex justify-center mt-8">
                <Button asChild size="lg" className="relative px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold shadow-xl border border-primary/60 hover:bg-primary/90 transition-colors overflow-hidden">
                  <Link href="/jobs" className="relative z-10 text-white overflow-hidden">
                    Start Clip Farming
                    <span className="glossy-overlay" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Creators Section */}
        <section className="py-20 bg-white/80">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">For Creators</h2>
            <ul className="flex flex-col gap-8">
              {[
                {
                  icon: (
                    <svg className="h-10 w-10" viewBox="0 0 168 168" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="84" cy="84" r="84" fill="#1DB954" />
                      <path d="M120.1 115.2c-1.7 2.8-5.3 3.7-8.1 2-22.1-13.5-49.9-16.5-82.6-8.9-3.2.7-6.4-1.3-7.1-4.5-.7-3.2 1.3-6.4 4.5-7.1 35.6-8.1 66.2-4.7 91.1 10.1 2.8 1.7 3.7 5.3 2 8.1zm11.6-23.2c-2.1 3.4-6.5 4.5-9.9 2.4-25.3-15.5-63.9-20-93.8-10.7-3.8 1.1-7.8-1-8.9-4.8-1.1-3.8 1-7.8 4.8-8.9 33.9-10.2 76.1-5.3 104.6 12.1 3.4 2.1 4.5 6.5 2.4 9.9zm12.2-25.1c-2.5 4-7.8 5.3-11.8 2.8-28.9-17.7-77.7-19.3-105.1-10.3-4.6 1.4-9.5-1.1-10.9-5.7-1.4-4.6 1.1-9.5 5.7-10.9 31.6-9.7 85.2-8 117.2 11.3 4 2.5 5.3 7.8 2.8 11.8z" fill="#191414"/>
                    </svg>
                  ), bg: 'bg-white',
                  title: 'Promote Your Music',
                  desc: 'Get your tracks discovered by a wider audience with viral short-form clips.'
                },
                {
                  icon: <Twitch className="h-8 w-8 text-white" />, bg: 'bg-gradient-to-br from-[#9147ff] to-purple-500',
                  title: 'Promote Your Twitch Streams',
                  desc: 'Turn your best live moments into shareable clips to grow your channel.'
                },
                {
                  icon: (
                    <svg className="h-10 w-10" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="10" width="40" height="28" rx="8" fill="#fff" />
                      <rect x="4" y="10" width="40" height="28" rx="8" fill="#fff" />
                      <path d="M44 14.8c-.5-1.9-2-3.4-3.9-3.9C37.1 10 24 10 24 10s-13.1 0-16.1.9c-1.9.5-3.4 2-3.9 3.9C4 17.9 4 24 4 24s0 6.1.9 9.2c.5 1.9 2 3.4 3.9 3.9C10.9 38 24 38 24 38s13.1 0 16.1-.9c1.9-.5 3.4-2 3.9-3.9.9-3.1.9-9.2.9-9.2s0-6.1-.9-9.2z" fill="#FF0000"/>
                      <polygon points="20,30 32,24 20,18" fill="#fff"/>
                    </svg>
                  ), bg: 'bg-white',
                  title: 'Promote YouTube & Long-Form Content',
                  desc: 'Drive more views to your YouTube videos or other long-form content with engaging highlights.'
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
              ].map((item, i) => (
                <li key={item.title} className="relative bg-white rounded-2xl shadow-xl border border-primary/10 p-8 flex items-center gap-6 group hover:scale-[1.025] hover:shadow-2xl transition-transform">
                  <div className={`flex flex-col items-center justify-center mr-4`}>
                    <span className="text-4xl md:text-5xl font-extrabold text-primary drop-shadow-lg mb-2">{i + 1}</span>
                    <span className={`rounded-full p-4 ${item.bg} shadow-lg flex items-center justify-center mb-2`}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-xl md:text-2xl text-primary mb-1">{item.title}</div>
                    <div className="text-muted-foreground text-base md:text-lg">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Content?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of creators who are already using ClipFarm to expand their reach.
              </p>
              <Button asChild size="lg" className="relative overflow-hidden">
                <Link href="/signup" className="overflow-hidden">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  <span className="glossy-overlay" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Clippers Section */}
        <section className="py-20 bg-white/80">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">For Clippers</h2>
            <ul className="flex flex-col gap-8">
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
              ].map((item, i) => (
                <li key={item.title} className="relative bg-white rounded-2xl shadow-xl border border-primary/10 p-8 flex items-center gap-6 group hover:scale-[1.025] hover:shadow-2xl transition-transform">
                  <div className={`flex flex-col items-center justify-center mr-4`}>
                    <span className="text-4xl md:text-5xl font-extrabold text-primary drop-shadow-lg mb-2">{i + 1}</span>
                    <span className={`rounded-full p-4 ${item.bg} shadow-lg flex items-center justify-center mb-2`}>
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-xl md:text-2xl text-primary mb-1">{item.title}</div>
                    <div className="text-muted-foreground text-base md:text-lg">{item.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Clippers CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-primary">Ready to Start Clipping?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the ClipFarm community and start earning from your editing skills today.
              </p>
              <Button asChild size="lg" className="relative overflow-hidden">
                <Link href="/clipper/dashboard" className="overflow-hidden">
                  Start Clipping <ArrowRight className="ml-2 h-5 w-5" />
                  <span className="glossy-overlay" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
