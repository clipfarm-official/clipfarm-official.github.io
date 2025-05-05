import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"
import type { Job } from "@/lib/types"

interface JobRequirementsProps {
  job: Job
}

export default function JobRequirements({ job }: JobRequirementsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Job Requirements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-lg mb-2">Clip Requirements</h3>
            <ul className="space-y-2">
              {job.requirements.clip.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-2">Submission Guidelines</h3>
            <ul className="space-y-2">
              {job.requirements.submission.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-2">Not Allowed</h3>
            <ul className="space-y-2">
              {job.requirements.notAllowed.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
