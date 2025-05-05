"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export default function CreateJobPage() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const platforms = [
    { id: "tiktok", label: "TikTok" },
    { id: "youtube", label: "YouTube Shorts" },
    { id: "instagram", label: "Instagram Reels" },
    { id: "facebook", label: "Facebook Reels" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Create a Clipping Job</h1>
      <p className="text-muted-foreground mb-6">Find talented clippers to create short-form content from your videos</p>

      <div className="mb-8">
        <div className="flex justify-between">
          <div className={`flex-1 text-center ${step >= 1 ? "text-primary" : "text-muted-foreground"}`}>
            <div className="mx-auto w-8 h-8 rounded-full bg-muted flex items-center justify-center mb-2">
              {step > 1 ? "✓" : "1"}
            </div>
            <div className="text-sm font-medium">Basic Info</div>
          </div>
          <div className={`flex-1 text-center ${step >= 2 ? "text-primary" : "text-muted-foreground"}`}>
            <div className="mx-auto w-8 h-8 rounded-full bg-muted flex items-center justify-center mb-2">
              {step > 2 ? "✓" : "2"}
            </div>
            <div className="text-sm font-medium">Requirements</div>
          </div>
          <div className={`flex-1 text-center ${step >= 3 ? "text-primary" : "text-muted-foreground"}`}>
            <div className="mx-auto w-8 h-8 rounded-full bg-muted flex items-center justify-center mb-2">
              {step > 3 ? "✓" : "3"}
            </div>
            <div className="text-sm font-medium">Payment</div>
          </div>
        </div>
        <div className="w-full bg-muted h-1 mt-2 rounded-full">
          <div className="bg-primary h-1 rounded-full transition-all" style={{ width: `${(step / 3) * 100}%` }} />
        </div>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>Provide details about your clipping job</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Job Title</Label>
              <Input id="title" placeholder="e.g., Need TikTok clips from my gaming streams" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Short Description</Label>
              <Textarea id="description" placeholder="Brief overview of what you're looking for" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="long-description">Detailed Description</Label>
              <Textarea
                id="long-description"
                placeholder="Provide detailed information about your content and what you want clippers to create"
                rows={5}
              />
            </div>

            <div className="grid gap-2">
              <Label>Platforms</Label>
              <div className="grid grid-cols-2 gap-2">
                {platforms.map((platform) => (
                  <div key={platform.id} className="flex items-center space-x-2">
                    <Checkbox id={platform.id} />
                    <Label htmlFor={platform.id}>{platform.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="content-type">Content Type</Label>
              <RadioGroup defaultValue="gaming">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="gaming" id="gaming" />
                  <Label htmlFor="gaming">Gaming</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vlog" id="vlog" />
                  <Label htmlFor="vlog">Vlog/Lifestyle</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="educational" id="educational" />
                  <Label htmlFor="educational">Educational</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="content-links">Content Links</Label>
              <Textarea
                id="content-links"
                placeholder="Add links to your content (YouTube videos, Twitch VODs, etc.) - one per line"
                rows={3}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={nextStep}>Next Step</Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Requirements</CardTitle>
            <CardDescription>Set guidelines for your clippers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="clip-requirements">Clip Requirements</Label>
              <Textarea
                id="clip-requirements"
                placeholder="e.g., Clips should be 15-60 seconds, include intro and outro, etc."
                rows={4}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="submission-guidelines">Submission Guidelines</Label>
              <Textarea
                id="submission-guidelines"
                placeholder="e.g., Submit link to published clip, include analytics screenshot, etc."
                rows={4}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="not-allowed">Not Allowed</Label>
              <Textarea
                id="not-allowed"
                placeholder="e.g., No clickbait, no misleading content, no inappropriate edits, etc."
                rows={4}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="deadline">Submission Deadline</Label>
              <Input id="deadline" type="date" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Previous
            </Button>
            <Button onClick={nextStep}>Next Step</Button>
          </CardFooter>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
            <CardDescription>Set your payment rate and terms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="pay-rate">Pay Rate ($ per 100K views)</Label>
              <Input id="pay-rate" type="number" placeholder="e.g., 50" />
              <p className="text-sm text-muted-foreground">
                Recommended: $30-100 per 100K views depending on content type and requirements
              </p>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="payment-terms">Payment Terms</Label>
              <RadioGroup defaultValue="monthly">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">Monthly payments</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="threshold" id="threshold" />
                  <Label htmlFor="threshold">Payment at view threshold</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div className="grid gap-2">
              <Label>Payment Method</Label>
              <RadioGroup defaultValue="platform">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="platform" id="platform" />
                  <Label htmlFor="platform">Platform payment (5% fee)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="direct" id="direct" />
                  <Label htmlFor="direct">Direct payment (you handle payments)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-medium mb-2">Payment Summary</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Pay rate:</span>
                  <span>$50 per 100K views</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform fee:</span>
                  <span>5%</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Clipper receives:</span>
                  <span>$47.50 per 100K views</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Previous
            </Button>
            <Button>Create Job</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
