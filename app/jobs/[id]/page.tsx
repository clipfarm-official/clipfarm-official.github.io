import { notFound } from "next/navigation"
import { jobs } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Calendar, Clock, Globe } from "lucide-react"
import LeaderboardTable from "@/components/leaderboard-table"
import JobRequirements from "@/components/job-requirements"

export default function JobPage({ params }: { params: { id: string } }) {
  const job = jobs.find((job) => job.id === params.id)

  if (!job) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <p className="text-muted-foreground">by {job.creatorName}</p>
            </div>
            <Badge variant={job.status === "Open" ? "default" : "secondary"} className="text-sm">
              {job.status}
            </Badge>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="mb-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            </TabsList>

            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>Job Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.description}</p>
                  <p className="mb-4">{job.longDescription}</p>

                  <h3 className="font-medium text-lg mb-2">Allowed Platforms</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.platforms.map((platform) => (
                      <Badge key={platform} variant="outline">
                        {platform}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="font-medium text-lg mb-2">Content Type</h3>
                  <p className="mb-4">{job.contentType}</p>

                  <h3 className="font-medium text-lg mb-2">Content Links</h3>
                  <ul className="list-disc pl-5 mb-4">
                    {job.contentLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requirements">
              <JobRequirements job={job} />
            </TabsContent>

            <TabsContent value="leaderboard">
              <LeaderboardTable job={job} />
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">${job.payRate} per 100K views</p>
                    <p className="text-sm text-muted-foreground">Payment Rate</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{job.postedDate}</p>
                    <p className="text-sm text-muted-foreground">Posted Date</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{job.deadline}</p>
                    <p className="text-sm text-muted-foreground">Deadline</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{job.platforms.join(", ")}</p>
                    <p className="text-sm text-muted-foreground">Platforms</p>
                  </div>
                </div>

                <Button className="w-full mt-4">Apply for This Job</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
