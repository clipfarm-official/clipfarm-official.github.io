'use client';
import dynamic from 'next/dynamic';

const EarningsPieChart = dynamic(() => import('./EarningsPieChart'), { ssr: false });

export default function EarningsPieChartWrapper({ earningsByCampaign }: { earningsByCampaign: { name: string; value: number }[] }) {
  return <EarningsPieChart earningsByCampaign={earningsByCampaign} />;
} 