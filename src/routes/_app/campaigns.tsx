import { createFileRoute } from '@tanstack/react-router'
import { Send, TrendingUp, Users, Calendar, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/_app/campaigns')({
  component: CampaignsPage,
})

const campaigns = [
  { id: 1, name: 'Main Conference Follow-up', reach: '42 contacts', engaged: '28', status: 'Sent', date: 'Oct 12' },
  { id: 2, name: 'Product Update Batch', reach: '128 contacts', engaged: '84', status: 'Draft', date: 'Oct 15' },
  { id: 3, name: 'Regional Meetup Invite', reach: '35 contacts', engaged: '-', status: 'Scheduled', date: 'Oct 20' },
]

function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">Campaigns</h1>
          <p className="text-muted-foreground font-sans">Track and manage your automated outreach efforts.</p>
        </div>
        <Button className="bg-[#4fb8b2] hover:bg-lagoon-deep text-white rounded-xl shadow-lg shadow-[#4fb8b2]/20 px-8 font-bold border-none transition-all">
          <Send className="h-4 w-4 mr-2" />
          New Campaign
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { label: 'Total Reach', value: '1,280', icon: Users, color: 'text-blue-500', bg: 'bg-blue-500/10' },
          { label: 'Avg Open Rate', value: '64%', icon: TrendingUp, color: 'text-green-500', bg: 'bg-green-500/10' },
          { label: 'Upcoming', value: '3', icon: Calendar, color: 'text-amber-500', bg: 'bg-amber-500/10' },
        ].map((stat, i) => (
          <Card key={i} className="rounded-2xl border-border shadow-sm bg-card overflow-hidden border-b-4 border-b-[#4fb8b2]/20 transition-all hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium text-muted-foreground font-sans">{stat.label}</p>
              <p className="text-3xl font-black text-foreground font-sans mt-1">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-border bg-accent/30">
          <h3 className="font-bold text-foreground font-sans">Recent Campaigns</h3>
        </div>
        <div className="divide-y divide-border">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-accent transition-colors group">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-accent flex items-center justify-center font-bold text-muted-foreground group-hover:bg-card transition-colors">
                  #{campaign.id}
                </div>
                <div>
                  <h4 className="font-bold text-foreground font-sans group-hover:text-[#4fb8b2] transition-colors">{campaign.name}</h4>
                  <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground font-sans">
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {campaign.reach}</span>
                    <span className="flex items-center gap-1"><TrendingUp className="h-3 w-3" /> {campaign.engaged} engaged</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right hidden md:block mr-4">
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider font-sans">Status</p>
                  <Badge 
                    variant="outline" 
                    className={`rounded-full mt-1 border-none ${
                      campaign.status === 'Sent' ? 'bg-green-500/10 text-green-500' :
                      campaign.status === 'Draft' ? 'bg-muted text-muted-foreground' :
                      'bg-blue-500/10 text-blue-500'
                    }`}
                  >
                    {campaign.status}
                  </Badge>
                </div>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-card transition-all group-hover:shadow-sm">
                  <ArrowUpRight className="h-4 w-4 text-foreground" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
