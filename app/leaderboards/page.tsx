import { jobs } from "@/lib/data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function LeaderboardsPage() {
  // Get all leaderboard entries across all jobs
  const allEntries = jobs.flatMap((job) =>
    job.leaderboard.map((entry) => ({
      ...entry,
      jobId: job.id,
      jobTitle: job.title,
      creatorName: job.creatorName,
    })),
  )

  // Sort by views
  const byViews = [...allEntries].sort((a, b) => b.views - a.views)

  // Sort by likes
  const byLikes = [...allEntries].sort((a, b) => b.likes - a.views)

  // Sort by earnings
  const byEarnings = [...allEntries].sort((a, b) => b.earnings - a.earnings)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Leaderboards</h1>
      <p className="text-muted-foreground mb-6">See the top performing clippers across all jobs</p>

      <Tabs defaultValue="views">
        <TabsList className="mb-6">
          <TabsTrigger value="views">Most Views</TabsTrigger>
          <TabsTrigger value="likes">Most Likes</TabsTrigger>
          <TabsTrigger value="earnings">Top Earnings</TabsTrigger>
        </TabsList>

        <TabsContent value="views">
          <LeaderboardTable entries={byViews.slice(0, 10)} title="Most Views" />
        </TabsContent>

        <TabsContent value="likes">
          <LeaderboardTable entries={byLikes.slice(0, 10)} title="Most Likes" />
        </TabsContent>

        <TabsContent value="earnings">
          <LeaderboardTable entries={byEarnings.slice(0, 10)} title="Top Earnings" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function LeaderboardTable({ entries, title }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Rank</TableHead>
              <TableHead>Clipper</TableHead>
              <TableHead>Job</TableHead>
              <TableHead>Platform</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead className="text-right">Likes</TableHead>
              <TableHead className="text-right">Earnings</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">#{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={entry.clipperName} />
                      <AvatarFallback>{entry.clipperName.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span>{entry.clipperName}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Link href={`/jobs/${entry.jobId}`} className="hover:underline">
                    {entry.jobTitle}
                  </Link>
                  <div className="text-xs text-muted-foreground">by {entry.creatorName}</div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{entry.platform}</Badge>
                </TableCell>
                <TableCell className="text-right">{entry.views.toLocaleString()}</TableCell>
                <TableCell className="text-right">{entry.likes.toLocaleString()}</TableCell>
                <TableCell className="text-right font-medium">${entry.earnings.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
