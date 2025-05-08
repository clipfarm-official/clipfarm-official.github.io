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

  // Modern redesign for job1
  if (job.id === 'job1') {
    return (
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#9147ff] to-purple-400 rounded-3xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">{job.title}</h1>
            <p className="text-lg text-purple-100 mb-4">by {job.creatorName}</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {job.platforms.map((platform) => (
                <Badge key={platform} variant="outline" className="bg-white/20 text-white border-white/30">{platform}</Badge>
              ))}
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full font-semibold text-lg">
                <DollarSign className="h-5 w-5" /> $50 / 100K views
              </span>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full font-semibold text-lg">
                <Clock className="h-5 w-5" /> 1 Month Campaign
              </span>
            </div>
            <Button className="mt-2 bg-white text-[#9147ff] hover:bg-purple-100 font-bold px-8 py-3 text-lg shadow-lg">Subscribe</Button>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <Card className="bg-white/90">
              <CardHeader>
                <CardTitle className="text-[#9147ff]">Quick Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#9147ff]" />
                  <span className="font-medium">Start: May 1, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#9147ff]" />
                  <span className="font-medium">End: May 31, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[#9147ff]" />
                  <span className="font-medium">{job.platforms.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">{job.status}</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-[#9147ff]">Campaign Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-lg">{job.description}</p>
                <p className="mb-4 text-base text-muted-foreground">{job.longDescription}</p>
                <h3 className="font-semibold text-md mb-2">Content Links</h3>
                <ul className="list-disc pl-5 mb-4">
                  {job.contentLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#9147ff] hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
                <h3 className="font-semibold text-md mb-2">Content Type</h3>
                <p className="mb-4">{job.contentType}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#9147ff]">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-1">Clip Requirements</h4>
                <ul className="list-disc pl-5 mb-4">
                  {job.requirements.clip.map((req, i) => <li key={i}>{req}</li>)}
                </ul>
                <h4 className="font-semibold mb-1">Submission Requirements</h4>
                <ul className="list-disc pl-5 mb-4">
                  {job.requirements.submission.map((req, i) => <li key={i}>{req}</li>)}
                </ul>
                <h4 className="font-semibold mb-1">Not Allowed</h4>
                <ul className="list-disc pl-5">
                  {job.requirements.notAllowed.map((req, i) => <li key={i}>{req}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-[#9147ff]">Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <LeaderboardTable job={job} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Default layout for other jobs
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
