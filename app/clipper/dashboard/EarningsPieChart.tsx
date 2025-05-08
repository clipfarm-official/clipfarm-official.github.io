'use client'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export default function EarningsPieChart({ earningsByCampaign }: { earningsByCampaign: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={earningsByCampaign}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={90}
          label
        >
          {earningsByCampaign.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={["#607d8b", "#78909c", "#90a4ae", "#b0bec5"][idx % 4]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
} 