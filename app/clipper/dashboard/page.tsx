import { Trophy, Eye, TrendingUp, DollarSign } from "lucide-react";

const mockEarnings = 4820.75;
const mockUnwithdrawn = 1230.50;
const mockCampaigns = [
  {
    id: 1,
    name: "Spring Creator Showdown",
    type: "pot", // 'pot' or 'ppv'
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

export default function ClipperDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center flex items-center justify-center gap-2">
          <TrendingUp className="h-8 w-8 text-primary" />
          Clipper Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <DollarSign className="h-8 w-8 text-primary mb-2" />
            <div className="text-lg text-muted-foreground">Total Earnings This Year</div>
            <div className="text-3xl font-bold text-primary mt-1">${mockEarnings.toLocaleString()}</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <Eye className="h-8 w-8 text-primary mb-2" />
            <div className="text-lg text-muted-foreground">Funds Not Yet Withdrawn</div>
            <div className="text-3xl font-bold text-primary mt-1">${mockUnwithdrawn.toLocaleString()}</div>
          </div>
        </div>
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
                  {c.type === "pot" ? (
                    <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary text-sm">
                      <Trophy className="h-5 w-5" />
                      Position: <span className="font-bold">{c.leaderboardPosition}</span>
                      <span className="ml-2 text-xs text-muted-foreground">Pot: ${typeof c.totalPot === 'number' ? c.totalPot.toLocaleString() : '0'}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full text-primary text-sm">
                      <DollarSign className="h-5 w-5" />
                      Earnings: <span className="font-bold">${c.acquiredEarnings?.toLocaleString()}</span>
                    </div>
                  )}
                  <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full ml-2">
                    {c.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 