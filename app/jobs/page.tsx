import { jobs } from "@/lib/data"
import JobCard from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Available Clipping Campaigns</h1>

      <div className="mb-8">
        <div className="flex gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search campaigns..." className="pl-10" />
          </div>
          <Button>Filter</Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" size="sm">
            All Campaigns
          </Button>
          <Button variant="outline" size="sm">
            TikTok
          </Button>
          <Button variant="outline" size="sm">
            YouTube Shorts
          </Button>
          <Button variant="outline" size="sm">
            Instagram Reels
          </Button>
          <Button variant="outline" size="sm">
            Highest Paying
          </Button>
          <Button variant="outline" size="sm">
            Newest
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
