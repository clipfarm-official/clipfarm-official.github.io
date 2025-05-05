import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Job } from "@/lib/types"

interface LeaderboardTableProps {
  job: Job
}

export default function LeaderboardTable({ job }: LeaderboardTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Rank</TableHead>
            <TableHead>Clipper</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead className="text-right">Views</TableHead>
            <TableHead className="text-right">Likes</TableHead>
            <TableHead className="text-right">Earnings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {job.leaderboard.map((entry, index) => (
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
  )
}
