import Sidebar from './Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-primary/10 to-white">
      <Sidebar />
      <main className="flex-1 py-12 px-4">
        {children}
      </main>
    </div>
  );
} 