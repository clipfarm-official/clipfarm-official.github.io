import { redirect } from 'next/navigation';
import { Trophy, Eye, TrendingUp, DollarSign } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import dynamic from 'next/dynamic';
import EarningsPieChartWrapper from './EarningsPieChartWrapper';
import Sidebar from './Sidebar';
import LinkedAccounts from './LinkedAccounts';

const mockEarnings = 4820.75;
const mockUnwithdrawn = 1230.50;
const earningsByCampaign = [
  { name: 'Spring Creator Showdown', value: 2100 },
  { name: 'Gaming Highlights March', value: 900 },
  { name: 'Music Clips Festival', value: 650 },
  { name: 'Other', value: 1170.75 },
];
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

export default function Page() {
  redirect('/clipper/dashboard/active-campaigns');
  return null;
} 