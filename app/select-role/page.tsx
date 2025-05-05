import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogoLarge } from "@/components/logo"
import { Scissors, Users } from "lucide-react"

export default function SelectRole() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mb-12">
          <div className="flex items-center gap-4 justify-center">
            <Scissors className="h-20 w-20 drop-shadow-lg" style={{ color: 'white' }} />
            <span className="text-5xl md:text-7xl font-extrabold drop-shadow-lg" style={{ color: 'white' }}>
              ClipFarm
            </span>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-white mb-8">
          Choose Your Role
        </h1>

        <div className="space-y-4">
          <Button
            asChild
            size="lg"
            className="w-full bg-white text-primary hover:bg-white/90 h-16 text-lg"
          >
            <Link href="/signup/creator">
              <Users className="mr-2 h-6 w-6" />
              I'm a Creator
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            className="w-full bg-white text-primary hover:bg-white/90 h-16 text-lg"
          >
            <Link href="/signup/clipper">
              <Scissors className="mr-2 h-6 w-6" />
              I'm a Clipper
            </Link>
          </Button>
        </div>

        <p className="text-white/80 mt-8">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
} 