import { DollarSign, Eye } from "lucide-react";
import EarningsPieChartWrapper from '../EarningsPieChartWrapper';

const mockEarnings = 4820.75;
const mockUnwithdrawn = 1230.50;
const earningsByCampaign = [
  { name: 'Spring Creator Showdown', value: 2100 },
  { name: 'Gaming Highlights March', value: 900 },
  { name: 'Music Clips Festival', value: 650 },
  { name: 'Other', value: 1170.75 },
];

export default function Earnings() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
        <DollarSign className="h-8 w-8 text-primary mb-2" />
        <div className="text-lg text-muted-foreground">Total Earnings This Year</div>
        <div className="text-3xl font-bold text-primary mt-1">${mockEarnings.toLocaleString()}</div>
        <div className="w-full mt-6">
          <EarningsPieChartWrapper earningsByCampaign={earningsByCampaign} />
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6 flex flex-col min-h-[220px]">
        <div className="flex flex-col items-center">
          <Eye className="h-8 w-8 text-primary mb-2" />
          <div className="text-lg text-muted-foreground">Funds Not Yet Withdrawn</div>
          <div className="text-3xl font-bold text-primary mt-1">${mockUnwithdrawn.toLocaleString()}</div>
        </div>
        <button className="mt-auto px-6 py-2 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition">Withdraw</button>
      </div>
    </div>
  );
} 