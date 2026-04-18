import { createFileRoute } from '@tanstack/react-router'
import { User, Bell, Lock, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/_app/settings')({
  component: SettingsPage,
})

function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">Settings</h1>
        <p className="text-muted-foreground font-sans">Manage your account settings and preferences.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <aside className="md:col-span-3 space-y-1">
          {[
            { label: 'Profile', icon: User, active: true },
            { label: 'Notifications', icon: Bell },
            { label: 'Security', icon: Lock },
            { label: 'Integrations', icon: Globe },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                item.active 
                ? 'bg-[#4fb8b2] text-white shadow-lg shadow-[#4fb8b2]/20' 
                : 'text-muted-foreground hover:bg-[#4fb8b2]/10 hover:text-[#4fb8b2]'
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </button>
          ))}
        </aside>

        <div className="md:col-span-9 bg-card p-8 rounded-2xl border border-border shadow-sm">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-foreground font-sans">Public Profile</h2>
              <p className="text-sm text-muted-foreground font-sans mt-1">This information will be visible on your business profile.</p>
            </div>
            <Separator className="bg-border" />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Full Name</label>
                <Input defaultValue="John Doe" className="bg-accent border-none focus-visible:ring-[#4fb8b2]" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Email Address</label>
                <Input defaultValue="john@example.com" disabled className="bg-muted border-none" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-foreground">Job Title</label>
                <Input defaultValue="Marketing Director" className="bg-accent border-none focus-visible:ring-[#4fb8b2]" />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <Button className="bg-[#4fb8b2] hover:bg-lagoon-deep text-white rounded-xl px-8 transition-colors shadow-lg shadow-[#4fb8b2]/20 border-none">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
