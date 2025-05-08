"use client";
import { User, BarChart2, TrendingUp, CreditCard, DollarSign, Link2, LogOut } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-white border-r flex flex-col py-8 px-6" style={{ scrollBehavior: 'smooth' }}>
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border flex items-center justify-center bg-gray-100">
          <User className="w-10 h-10 text-gray-400" />
        </div>
        <div className="text-lg font-semibold">EditzHD</div>
        <div className="text-sm text-gray-500">@editzhd</div>
      </div>
      <nav className="flex-1">
        <div className="mb-6">
          <div className="text-xs text-gray-400 uppercase mb-2">Campaigns</div>
          <ul className="space-y-2">
            <li>
              <Link href="/clipper/dashboard/active-campaigns" className="flex items-center gap-3 text-gray-700 hover:text-primary cursor-pointer font-medium">
                <BarChart2 className="w-5 h-5" /> Active Campaigns
              </Link>
            </li>
            <li>
              <Link href="/clipper/dashboard/past-campaigns" className="flex items-center gap-3 text-gray-700 hover:text-primary cursor-pointer font-medium">
                <TrendingUp className="w-5 h-5" /> Past Campaigns
              </Link>
            </li>
            <li>
              <Link href="/clipper/dashboard/campaign-stats" className="flex items-center gap-3 text-gray-700 hover:text-primary cursor-pointer font-medium">
                <BarChart2 className="w-5 h-5" /> Campaign Stats
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="text-xs text-gray-400 uppercase mb-2">Earnings & Payment</div>
          <ul className="space-y-2">
            <li>
              <Link href="/clipper/dashboard/earnings" className="flex items-center gap-3 text-gray-700 hover:text-primary cursor-pointer font-medium">
                <DollarSign className="w-5 h-5" /> Earnings Overview
              </Link>
            </li>
            <li>
              <Link href="/clipper/dashboard/payment-methods" className="flex items-center gap-3 text-gray-700 hover:text-primary cursor-pointer font-medium">
                <CreditCard className="w-5 h-5" /> Payment Methods
              </Link>
            </li>
            <li>
              <Link href="/clipper/dashboard/balance" className="flex items-center gap-3 text-gray-700 hover:text-primary cursor-pointer font-medium">
                <DollarSign className="w-5 h-5" /> Balance
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="text-xs text-gray-400 uppercase mb-2">Social Media</div>
          <ul className="space-y-2">
            <li>
              <Link href="/clipper/dashboard/linked-accounts" className="flex items-center gap-3 text-gray-700 hover:text-primary cursor-pointer font-medium">
                <Link2 className="w-5 h-5" /> Linked Accounts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-auto pt-8">
        <button className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium text-sm">
          <LogOut className="w-5 h-5" /> Log out
        </button>
      </div>
    </aside>
  );
} 