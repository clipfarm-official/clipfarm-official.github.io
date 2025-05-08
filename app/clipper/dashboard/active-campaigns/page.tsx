'use client';
import { Trophy, DollarSign, Video, PlusCircle, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const mockCampaigns = [
  {
    id: 1,
    name: "Spring Creator Showdown",
    type: "pot",
    leaderboardPosition: 3,
    totalPot: 5000,
    status: "Active",
  },
  {
    id: 2,
    name: "Gaming Highlights March",
    type: "ppv",
    acquiredEarnings: 320.25,
    status: "Active",
    trackedClips: [
      {
        url: "https://youtube.com/clip1",
        views: 12000,
        status: "Tracked",
        aiCheck: "Pass"
      },
      {
        url: "https://youtube.com/clip2",
        views: 8000,
        status: "Tracked",
        aiCheck: "Pass"
      },
      {
        url: "https://youtube.com/clip3",
        views: 5000,
        status: "Tracked",
        aiCheck: "Fail"
      },
    ],
    requirements: [
      "15-60 seconds in length",
      "Must include face cam reaction",
      "Add subtitles for important dialogue",
      "Include channel name in the video",
      "Music and sound effects encouraged"
    ]
  },
  {
    id: 3,
    name: "Music Clips Festival",
    type: "pot",
    leaderboardPosition: 12,
    totalPot: 2000,
    status: "Active",
  },
];

export default function ActiveCampaigns() {
  const [selectedCampaign, setSelectedCampaign] = useState<null | number>(null);
  const [clipUrl, setClipUrl] = useState("");
  const [aiResult, setAiResult] = useState<null | "Pass" | "Fail">(null);
  const gamingHighlightsMarch = mockCampaigns.find(c => c.name === "Gaming Highlights March");
  const trackedClips = gamingHighlightsMarch?.trackedClips ?? [];
  const requirements = gamingHighlightsMarch?.requirements ?? [];
  const leaderboard = [
    {
      clipperName: "You",
      platform: "YouTube Shorts",
      views: 25000,
      likes: 4000,
      earnings: 125,
      isYou: true
    },
    {
      clipperName: "EditMaster",
      platform: "Instagram Reels",
      views: 12000,
      likes: 1200,
      earnings: 60
    },
    {
      clipperName: "ClipPro",
      platform: "TikTok",
      views: 8000,
      likes: 900,
      earnings: 40
    },
    {
      clipperName: "ShortFormStar",
      platform: "Twitter",
      views: 5000,
      likes: 500,
      earnings: 25
    }
  ];
  const [clips, setClips] = useState(trackedClips);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (clipUrl.includes("youtube.com")) {
      setAiResult("Pass");
      setClips([...clips, { url: clipUrl, views: 0, status: "Tracked", aiCheck: "Pass" }]);
    } else {
      setAiResult("Fail");
    }
    setClipUrl("");
  }

  // Show campaign list by default
  if (selectedCampaign === null) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Trophy className="h-6 w-6 text-primary" /> Active Campaigns
        </h2>
        <div className="divide-y">
          {mockCampaigns.map((c) => (
            <div key={c.id} className="py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-semibold text-lg text-primary">{c.name}</div>
                <div className="text-sm text-muted-foreground">{c.type === "pot" ? "Pot Tournament" : "Pay Per View"}</div>
              </div>
              <div className="flex items-center gap-4 mt-2 md:mt-0">
                <button
                  className="px-4 py-2 bg-[#9147ff] text-white rounded-lg font-semibold hover:bg-purple-700 transition"
                  onClick={() => setSelectedCampaign(c.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Show details for Gaming Highlights March
  if (selectedCampaign === 2) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <button
          className="mb-4 px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm"
          onClick={() => setSelectedCampaign(null)}
        >
          ← Back to Campaigns
        </button>
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 shadow flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-[#9147ff] mb-2">Gaming Highlights March</h3>
            <div className="flex gap-4 mb-2">
              <span className="inline-flex items-center gap-2 bg-white/80 text-[#9147ff] px-4 py-1 rounded-full font-semibold">
                <DollarSign className="h-5 w-5" /> $50 / 100K views
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 text-[#9147ff] px-4 py-1 rounded-full font-semibold">
                <Video className="h-5 w-5" /> Pay Per View
              </span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">Status: <span className="font-semibold text-green-600">Active</span></div>
            <div className="text-sm text-muted-foreground mb-2">Campaign Duration: <span className="font-semibold">March 1 - March 31, 2023</span></div>
            <div className="text-sm text-muted-foreground mb-2">Requirements:</div>
            <ul className="list-disc pl-5 text-sm text-gray-700 mb-2">
              {requirements.map((req, i) => <li key={i}>{req}</li>)}
            </ul>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow p-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2"><Video className="h-5 w-5 text-[#9147ff]" />Tracked Clips</h4>
              <ul className="divide-y">
                {clips.map((clip, i) => (
                  <li key={i} className="flex items-center justify-between py-2">
                    <div className="flex items-center gap-2">
                      <a href={clip.url} target="_blank" rel="noopener noreferrer" className="text-[#9147ff] hover:underline text-sm">{clip.url}</a>
                      <span className="text-xs text-gray-500">{clip.views} views</span>
                    </div>
                  </li>
                ))}
              </ul>
              <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                <input
                  type="url"
                  required
                  placeholder="Paste your clip URL..."
                  className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9147ff]"
                  value={clipUrl}
                  onChange={e => setClipUrl(e.target.value)}
                />
                <button type="submit" className="bg-[#9147ff] text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-1 hover:bg-purple-700 transition">
                  <PlusCircle className="h-5 w-5" /> Track Clip
                </button>
              </form>
              {aiResult === "Pass" && <div className="mt-2 text-green-600 flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Clip meets requirements!</div>}
              {aiResult === "Fail" && <div className="mt-2 text-red-500 flex items-center gap-1"><XCircle className="h-4 w-4" /> Clip does not meet requirements.</div>}
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-xl shadow p-4">
          <h4 className="font-semibold mb-2 flex items-center gap-2 text-[#9147ff]">Leaderboard</h4>
          <div className="rounded-md border overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="w-12 py-2">Rank</th>
                  <th className="py-2">Clipper</th>
                  <th className="py-2">Platform</th>
                  <th className="text-right py-2">Views</th>
                  <th className="text-right py-2">Likes</th>
                  <th className="text-right py-2">Earnings</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry, i) => (
                  <tr key={i} className={`border-t ${entry.isYou ? 'bg-green-50' : ''}`}>
                    <td className="font-medium">#{i + 1}</td>
                    <td>
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-600">
                          {entry.clipperName.substring(0, 2).toUpperCase()}
                        </div>
                        <span className={entry.isYou ? 'text-green-700 font-bold' : ''}>{entry.clipperName}</span>
                      </div>
                    </td>
                    <td><span className="inline-block"><span className="inline-block px-2 py-1 rounded bg-gray-100 border text-xs">{entry.platform}</span></span></td>
                    <td className="text-right">{entry.views.toLocaleString()}</td>
                    <td className="text-right">{entry.likes.toLocaleString()}</td>
                    <td className="text-right font-medium">${entry.earnings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  // Placeholder detail view for other campaigns
  const campaign = mockCampaigns.find(c => c.id === selectedCampaign);
  if (campaign) {
    return (
      <div className="bg-white rounded-xl shadow p-6">
        <button
          className="mb-4 px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm"
          onClick={() => setSelectedCampaign(null)}
        >
          ← Back to Campaigns
        </button>
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 shadow flex flex-col gap-4 items-start">
          <h3 className="text-2xl font-bold text-[#9147ff] mb-2">{campaign.name}</h3>
          <div className="flex gap-4 mb-2">
            <span className="inline-flex items-center gap-2 bg-white/80 text-[#9147ff] px-4 py-1 rounded-full font-semibold">
              {campaign.type === "pot" ? <Trophy className="h-5 w-5" /> : <Video className="h-5 w-5" />}
              {campaign.type === "pot" ? "Pot Tournament" : "Pay Per View"}
            </span>
          </div>
          <div className="text-sm text-muted-foreground mb-2">Status: <span className="font-semibold text-green-600">{campaign.status}</span></div>
          {campaign.type === "pot" && (
            <div className="text-sm text-muted-foreground mb-2">Total Pot: <span className="font-semibold">${campaign.totalPot?.toLocaleString()}</span></div>
          )}
          {campaign.type === "pot" && (
            <div className="text-sm text-muted-foreground mb-2">Leaderboard Position: <span className="font-semibold">{campaign.leaderboardPosition}</span></div>
          )}
          {campaign.type === "ppv" && (
            <div className="text-sm text-muted-foreground mb-2">Acquired Earnings: <span className="font-semibold">${campaign.acquiredEarnings?.toLocaleString()}</span></div>
          )}
        </div>
      </div>
    );
  }
} 