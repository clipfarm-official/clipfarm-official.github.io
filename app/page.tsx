import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo, LogoLarge } from "@/components/logo"
import { ArrowRight, Scissors, Users, TrendingUp, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-radial from-blue-500/40 via-blue-400/20 to-transparent" style={{position: 'absolute', inset: 0}} />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-16">
              <span className="block">
                <LogoLarge />
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 drop-shadow-lg leading-tight">
              <span className="block">
                Transform Your Content <span className="text-black">into</span>
              </span>
              <span className="block text-blue-500">Viral Clips</span>
            </h1>
            <div className="flex justify-center mt-8">
              <Button
                asChild
                size="lg"
                className="relative px-10 py-4 rounded-full bg-blue-500/95 backdrop-blur-sm shadow-xl border border-blue-400/60 hover:bg-blue-600 transition-colors before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-300/10 before:to-blue-500/5 before:pointer-events-none"
              >
                <Link href="/jobs" className="relative z-10">
                  Start Clip Farming
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Scissors className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Clipping</h3>
              <p className="text-muted-foreground">
                Get high-quality clips created by experienced editors who know how to capture the most engaging moments.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Talent Pool</h3>
              <p className="text-muted-foreground">
                Access a diverse community of skilled clippers from around the world, ready to bring your content to life.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Growth Focused</h3>
              <p className="text-muted-foreground">
                Boost your reach and engagement with clips optimized for maximum impact across all platforms.
              </p>
            </div>
          </div>
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
            <Button asChild size="lg">
              <Link href="/signup">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
