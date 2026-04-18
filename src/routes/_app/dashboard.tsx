import { createFileRoute } from '@tanstack/react-router'
import { LayoutDashboard } from 'lucide-react'

export const Route = createFileRoute('/_app/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">Dashboard</h1>
        <p className="text-muted-foreground font-sans">Welcome back! Here's an overview of your card scanning activity.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Total Cards', value: '128', change: '+12%', icon: LayoutDashboard },
          { label: 'Connections', value: '84', change: '+5%', icon: LayoutDashboard },
          { label: 'Active Campaigns', value: '3', change: '0', icon: LayoutDashboard },
          { label: 'Scan Credits', value: '42/100', change: 'Renew in 12 days', icon: LayoutDashboard },
        ].map((stat, i) => (
          <div key={i} className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground font-sans">{stat.label}</span>
              <stat.icon className="h-5 w-5 text-[#4fb8b2]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground font-sans">{stat.value}</span>
              <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full font-sans">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-4 bg-card p-6 rounded-2xl border border-border shadow-sm">
          <h2 className="text-lg font-bold text-foreground mb-4 font-sans">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent transition-colors">
                <div className="h-10 w-10 rounded-full bg-[#4fb8b2]/10 flex items-center justify-center">
                  <LayoutDashboard className="h-5 w-5 text-[#4fb8b2]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground font-sans">Scanned Business Card</p>
                  <p className="text-xs text-muted-foreground font-sans">John Smith • CEO at Tech Corp</p>
                </div>
                <span className="ml-auto text-xs text-muted-foreground font-sans">2h ago</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-3 bg-card p-6 rounded-2xl border border-border shadow-sm">
          <h2 className="text-lg font-bold text-foreground mb-4 font-sans">Quick Actions</h2>
          <div className="grid gap-4">
            <button className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-[#4fb8b2]/20 hover:border-[#4fb8b2] hover:bg-[#4fb8b2]/5 transition-all group">
              <div className="h-12 w-12 rounded-xl bg-[#4fb8b2] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <LayoutDashboard className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-foreground font-sans">Scan New Card</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
