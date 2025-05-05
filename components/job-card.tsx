import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, Eye, ThumbsUp, Users } from "lucide-react"
import type { Job } from "@/lib/types"

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{job.title}</h3>
            <p className="text-sm text-muted-foreground">by {job.creatorName}</p>
          </div>
          <Badge variant={job.status === "Open" ? "default" : "secondary"}>{job.status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm mb-4 line-clamp-3">{job.description}</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span>${job.payRate}/100K views</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{job.clippers} clippers</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4 text-muted-foreground" />
            <span>{job.totalViews.toLocaleString()} views</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
            <span>{job.totalLikes.toLocaleString()} likes</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-1">
          {job.platforms.map((platform) => (
            <Badge key={platform} variant="outline">
              {platform}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/jobs/${job.id}`}>
            View Job <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
