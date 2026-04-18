import { createFileRoute, Link } from '@tanstack/react-router'
import { Plus, Search, Mail, MessageSquare, MoreVertical, Copy, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/_app/templates')({
  component: TemplatesPage,
})

const templates = [
  { id: 1, title: 'Intro Networking', type: 'Email', preview: 'Hi {{name}}, it was great meeting you at...', lastUsed: '2 days ago' },
  { id: 2, title: 'Follow-up WhatsApp', type: 'WhatsApp', preview: 'Hey {{name}}, here is the info we discussed...', lastUsed: '5 hours ago' },
  { id: 3, title: 'Proposal Brief', type: 'Email', preview: 'Dear {{name}}, regarding our pitch...', lastUsed: '1 week ago' },
  { id: 4, title: 'Thank You Note', type: 'Email', preview: 'Just a quick thank you for your time...', lastUsed: 'Today' },
]

function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">Message Templates</h1>
          <p className="text-muted-foreground font-sans">Create and manage your outreach templates.</p>
        </div>
        <Button asChild className="bg-[#4fb8b2] hover:bg-lagoon-deep text-white rounded-xl shadow-lg shadow-[#4fb8b2]/20 border-none transition-all">
          <Link to="/templates/create">
            <Plus className="h-4 w-4 mr-2" />
            New Template
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
        <div className="relative w-full md:w-[400px]">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search templates..." className="pl-10 h-10 bg-card border-border focus-visible:ring-[#4fb8b2]" />
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="px-3 py-1 cursor-pointer bg-card hover:bg-accent border-border transition-colors">All</Badge>
          <Badge variant="outline" className="px-3 py-1 cursor-pointer bg-card hover:bg-accent border-border transition-colors">Email</Badge>
          <Badge variant="outline" className="px-3 py-1 cursor-pointer bg-card hover:bg-accent border-border transition-colors">WhatsApp</Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="rounded-2xl border-border shadow-sm hover:shadow-md transition-all group overflow-hidden bg-card">
            <CardHeader className="bg-accent/30 flex flex-row items-center justify-between py-4">
              <div className="flex items-center gap-2">
                {template.type === 'Email' ? (
                  <Mail className="h-4 w-4 text-[#4fb8b2]" />
                ) : (
                  <MessageSquare className="h-4 w-4 text-green-500" />
                )}
                <CardTitle className="text-md font-bold text-foreground font-sans truncate max-w-[150px]">
                  {template.title}
                </CardTitle>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </Button>
            </CardHeader>
            <CardContent className="pt-4 pb-2">
              <p className="text-sm text-muted-foreground italic line-clamp-2 font-sans overflow-hidden h-10">
                "{template.preview}"
              </p>
              <p className="text-[10px] text-muted-foreground mt-4 font-bold uppercase tracking-widest">
                Last used: {template.lastUsed}
              </p>
            </CardContent>
            <CardFooter className="bg-accent/10 border-t border-border py-3 flex gap-2">
              <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-[#4fb8b2] hover:bg-[#4fb8b2]/10 h-8 rounded-lg transition-colors">
                <Copy className="h-3 w-3 mr-2" />
                Duplicate
              </Button>
              <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-destructive hover:bg-destructive/10 h-8 rounded-lg transition-colors">
                <Trash2 className="h-3 w-3 mr-2" />
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
