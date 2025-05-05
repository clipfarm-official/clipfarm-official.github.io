import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo, LogoLarge } from "@/components/logo"
import { ArrowRight, Scissors, Users, TrendingUp, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <Scissors className="h-6 w-6 text-primary glossy-text" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Clipping</h3>
              <p className="text-muted-foreground">
                Get high-quality clips created by experienced editors who know how to capture the most engaging moments.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <Users className="h-6 w-6 text-primary glossy-text" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Talent Pool</h3>
              <p className="text-muted-foreground">
                Access a diverse community of skilled clippers from around the world, ready to bring your content to life.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                <TrendingUp className="h-6 w-6 text-primary glossy-text" />
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
            <Button asChild size="lg" className="relative overflow-hidden">
              <Link href="/signup" className="overflow-hidden">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
                <span className="glossy-overlay" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
