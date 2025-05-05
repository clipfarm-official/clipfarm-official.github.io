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
import { Plus, X } from "lucide-react"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

export default function CreateJobPage() {
  const [step, setStep] = useState(1)
  const [contentLink, setContentLink] = useState("")
  const [contentLinks, setContentLinks] = useState<string[]>([])
  const [paymentType, setPaymentType] = useState<'perView' | 'pot'>('perView')
  const [payRate, setPayRate] = useState("")
  const [potAmount, setPotAmount] = useState("")
  const [minViews, setMinViews] = useState("")
  const [potSplits, setPotSplits] = useState([
    { place: 1, percent: 20 },
    { place: 2, percent: 10 },
    { place: 3, percent: 5 },
  ])

  const totalAssigned = potSplits.reduce((sum, s) => sum + Number(s.percent), 0)
  const restPercent = Math.max(0, 100 - totalAssigned)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const platforms = [
    { id: "tiktok", label: "TikTok" },
    { id: "youtube", label: "YouTube Shorts" },
    { id: "instagram", label: "Instagram Reels" },
    { id: "facebook", label: "Facebook Reels" },
  ]

  const addContentLink = () => {
    if (contentLink.trim() && !contentLinks.includes(contentLink.trim())) {
      setContentLinks([...contentLinks, contentLink.trim()])
      setContentLink("")
    }
  }

  const removeContentLink = (link: string) => {
    setContentLinks(contentLinks.filter((l) => l !== link))
  }

  const addPotSplit = () => {
    setPotSplits([...potSplits, { place: potSplits.length + 1, percent: 0 }])
  }

  const updatePotSplit = (idx: number, value: number) => {
    setPotSplits(potSplits.map((s, i) => i === idx ? { ...s, percent: value } : s))
  }

  const removePotSplit = (idx: number) => {
    setPotSplits(potSplits.filter((_, i) => i !== idx))
  }

  function getOrdinalSuffix(n: number) {
    const s = ["th", "st", "nd", "rd"], v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }

  // Pie chart settings
  const PIE_CHART_RADIUS = 110;
  const PIE_CHART_CX = '50%';
  const PIE_CHART_CY = '52%';

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Create a Campaign</h1>
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
            <CardDescription>Provide details about your campaign</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Campaign Title</Label>
              <Input id="title" placeholder="e.g., Need TikTok clips from my gaming streams" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Short Description</Label>
              <Textarea id="description" placeholder="Brief overview of your campaign" />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="long-description">Detailed Description</Label>
              <Textarea
                id="long-description"
                placeholder="Provide detailed information about your campaign and what you want clippers to create"
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
              <Label htmlFor="content-links">Specific Videos</Label>
              <div className="flex gap-2">
                <Input
                  id="content-links"
                  placeholder="Paste a video link (YouTube, Twitch, etc.)"
                  value={contentLink}
                  onChange={(e) => setContentLink(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addContentLink(); } }}
                />
                <Button type="button" variant="outline" onClick={addContentLink} className="px-2">
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
              {contentLinks.length > 0 && (
                <ul className="mt-2 space-y-2">
                  {contentLinks.map((link, idx) => (
                    <li key={link} className="flex items-center gap-2 bg-muted rounded px-3 py-1">
                      <span className="truncate flex-1">{link}</span>
                      <button type="button" onClick={() => removeContentLink(link)} className="text-red-500 hover:text-red-700">
                        <X className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
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
              <Label htmlFor="not-allowed">Not Allowed</Label>
              <Textarea
                id="not-allowed"
                placeholder="e.g., No clickbait, no misleading content, no inappropriate edits, etc."
                rows={4}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="end-date">Campaign End Date</Label>
              <Input id="end-date" type="date" />
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
            <CardDescription>Set your campaign's payment rate and terms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-2">
              <Label>Payment Type</Label>
              <RadioGroup value={paymentType} onValueChange={v => setPaymentType(v as 'perView' | 'pot')}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="perView" id="perView" />
                  <Label htmlFor="perView">Per View</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pot" id="pot" />
                  <Label htmlFor="pot">Tournament Pot</Label>
                </div>
              </RadioGroup>
            </div>

            {paymentType === 'perView' && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="pay-rate">Pay Rate ($ per 100K views)</Label>
                  <Input id="pay-rate" type="number" placeholder="e.g., 50" value={payRate} onChange={e => setPayRate(e.target.value)} />
                  <p className="text-sm text-muted-foreground">
                    Recommended: $30-100 per 100K views depending on content type and requirements
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="min-views">Minimum View Threshold</Label>
                  <Input id="min-views" type="number" placeholder="e.g., 10000" value={minViews} onChange={e => setMinViews(e.target.value)} />
                  <p className="text-sm text-muted-foreground">Clips must reach this number of views to be eligible for payment.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Payment Summary</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Pay rate:</span>
                      <span>${payRate || '0'} per 100K views</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minimum views:</span>
                      <span>{minViews || '0'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform fee:</span>
                      <span>5%</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Clipper receives:</span>
                      <span>${payRate ? (Number(payRate) * 0.95).toFixed(2) : '0.00'} per 100K views</span>
                    </div>
                  </div>
                </div>
              </>
            )}

            {paymentType === 'pot' && (
              <>
                <div className="grid gap-2">
                  <Label htmlFor="pot-amount">Total Pot Amount ($)</Label>
                  <Input id="pot-amount" type="number" placeholder="e.g., 500" value={potAmount} onChange={e => setPotAmount(e.target.value)} />
                  <p className="text-sm text-muted-foreground">
                    The total pot will be split among all participating clippers based on your criteria.
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label>Pot Split Configuration (%)</Label>
                  <div className="space-y-2">
                    {potSplits.map((split, idx) => (
                      <div key={split.place} className="flex items-center gap-2">
                        <Label htmlFor={`place-${split.place}`} className="text-xs min-w-[40px]">{split.place}{getOrdinalSuffix(split.place)} place</Label>
                        <Input
                          id={`place-${split.place}`}
                          type="number"
                          min="0"
                          max="100"
                          className="w-16"
                          value={split.percent}
                          onChange={e => updatePotSplit(idx, Number(e.target.value))}
                        />
                        <button type="button" onClick={() => removePotSplit(idx)} className="text-red-500 hover:text-red-700">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <Button type="button" variant="outline" size="sm" className="mt-2 w-fit" onClick={addPotSplit}>
                    <Plus className="w-4 h-4 mr-1" /> Add Place
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    {potSplits.length === 0
                      ? '100% will be split among all qualifying clippers, proportional to their view counts.'
                      : `Each specified place receives the greater of their configured percentage or their proportional share by views. Remaining ${restPercent}% will be split among all other qualifying clippers, proportional to their view counts.`}
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="min-views-pot">Minimum View Threshold</Label>
                  <Input id="min-views-pot" type="number" placeholder="e.g., 10000" value={minViews} onChange={e => setMinViews(e.target.value)} />
                  <p className="text-sm text-muted-foreground">Clips must reach this number of views to be eligible for payment.</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Payment Summary</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Total pot:</span>
                      <span>${potAmount || '0'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minimum views:</span>
                      <span>{minViews || '0'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform fee:</span>
                      <span>5%</span>
                    </div>
                    {potSplits.length === 0 ? (
                      <div className="flex justify-between">
                        <span>All qualifying (proportional by views):</span>
                        <span>100%</span>
                      </div>
                    ) : (
                      <>
                        {potSplits.map((split) => (
                          <div className="flex justify-between" key={split.place}>
                            <span>{split.place}{getOrdinalSuffix(split.place)} place:</span>
                            <span>{split.percent}%</span>
                          </div>
                        ))}
                        <div className="flex justify-between">
                          <span>Other qualifying (proportional by views):</span>
                          <span>{restPercent}%</span>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="w-full h-72 mt-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            ...potSplits.map((split) => ({
                              name: `${split.place}${getOrdinalSuffix(split.place)} place`,
                              value: Number(split.percent),
                            })),
                            { name: "Other (proportional by views)", value: restPercent },
                          ].filter((d) => d.value > 0)}
                          dataKey="value"
                          nameKey="name"
                          cx={PIE_CHART_CX}
                          cy={PIE_CHART_CY}
                          outerRadius={PIE_CHART_RADIUS}
                          label
                        >
                          {[
                            ...potSplits.map((_, idx) => `#${['4f8cff','6dd3fa','a78bfa','f472b6','facc15','34d399','f87171'][idx % 7]}`),
                            '#a3a3a3',
                          ].filter((_, i) => ([...potSplits, {name:'rest'}][i]?.percent ?? restPercent) > 0).map((color, idx) => (
                            <Cell key={`cell-${idx}`} fill={color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value: number) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Previous
            </Button>
            <Button>Create Campaign</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
