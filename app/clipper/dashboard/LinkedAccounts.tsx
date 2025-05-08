import { Youtube, Twitter, Link2, Music2 } from 'lucide-react';

const accounts = [
  { name: 'TikTok', icon: <Music2 className="w-6 h-6 text-[#010101]" />, status: 'Linked', username: '@yourtiktok' },
  { name: 'YouTube', icon: <Youtube className="w-6 h-6 text-[#FF0000]" />, status: 'Linked', username: '@youryoutube' },
  { name: 'Snapchat', icon: <Link2 className="w-6 h-6 text-[#FFFC00]" />, status: 'Linked', username: '@yoursnapchat' },
  { name: 'Twitter', icon: <Twitter className="w-6 h-6 text-[#1DA1F2]" />, status: 'Linked', username: '@yourtwitter' },
];

export default function LinkedAccounts() {
  return (
    <section id="linked-accounts" className="bg-white rounded-xl shadow p-6 mt-10">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        Linked Accounts
      </h2>
      <ul className="divide-y">
        {accounts.map((acc) => (
          <li key={acc.name} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              {acc.icon}
              <span className="font-medium">{acc.name}</span>
              <span className="text-gray-400 text-sm">{acc.username}</span>
            </div>
            <button className="inline-block border border-red-200 text-red-600 text-xs px-3 py-1 rounded-full hover:bg-red-50 hover:border-red-400 transition font-semibold">
              Unlink
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
} 