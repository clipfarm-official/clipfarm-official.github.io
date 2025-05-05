export interface Job {
  id: string
  title: string
  description: string
  longDescription: string
  creatorName: string
  status: "Open" | "Closed"
  payRate: number
  postedDate: string
  deadline: string
  platforms: string[]
  contentType: string
  contentLinks: string[]
  clippers: number
  totalViews: number
  totalLikes: number
  requirements: {
    clip: string[]
    submission: string[]
    notAllowed: string[]
  }
  leaderboard: LeaderboardEntry[]
}

export interface LeaderboardEntry {
  clipperName: string
  platform: string
  views: number
  likes: number
  earnings: number
  clipUrl: string
}
