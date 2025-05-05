import { Scissors } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Scissors className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
        ClipFarm
      </span>
    </div>
  )
}

export function LogoLarge() {
  return (
    <div className="flex items-center gap-4 justify-center">
      <Scissors className="h-20 w-20 text-primary drop-shadow-lg" />
      <span className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
        ClipFarm
      </span>
    </div>
  )
} 