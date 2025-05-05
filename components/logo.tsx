import { Scissors } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Scissors className="h-8 w-8" style={{ color: '#6e27b6' }} />
      <span className="text-2xl font-bold" style={{ color: '#6e27b6' }}>
        ClipFarm
      </span>
    </div>
  )
}

export function LogoLarge() {
  return (
    <div className="flex items-center gap-4 justify-center">
      <Scissors className="h-20 w-20 drop-shadow-lg" style={{ color: '#6e27b6' }} />
      <span className="text-5xl md:text-7xl font-extrabold drop-shadow-lg" style={{ color: '#6e27b6' }}>
        ClipFarm
      </span>
    </div>
  )
} 