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
      <span className="relative text-5xl md:text-7xl font-extrabold drop-shadow-lg" style={{ color: '#6e27b6' }}>
        ClipFarm
        <span
          className="absolute left-0 top-0 w-full h-full pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.10) 40%, transparent 70%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            zIndex: 1,
          }}
          aria-hidden="true"
        >
          ClipFarm
        </span>
      </span>
    </div>
  )
} 