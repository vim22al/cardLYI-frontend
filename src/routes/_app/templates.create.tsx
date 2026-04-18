import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Save, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/templates/create')({
  component: CreateTemplatePage,
})

function CreateTemplatePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon" className="h-9 w-9 rounded-full bg-card border border-border hover:bg-accent transition-colors">
          <Link to="/templates">
            <ArrowLeft className="h-4 w-4 text-foreground" />
          </Link>
        </Button>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold tracking-tight text-foreground font-sans">Create Template</h1>
        </div>
      </div>

      <Card className="rounded-3xl border-border shadow-sm overflow-hidden bg-card">
        <CardHeader className="p-6 border-b border-border bg-accent/30">
          <CardTitle className="text-lg font-bold text-foreground">Template Editor</CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Template Title</label>
                <Input placeholder="e.g. Networking Intro" className="bg-accent border-none focus-visible:ring-[#4fb8b2] h-11" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Channel</label>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 rounded-xl border-[#4fb8b2] bg-[#4fb8b2]/10 text-[#4fb8b2] transition-colors">Email</Button>
                  <Button variant="outline" className="flex-1 rounded-xl border-border hover:bg-accent transition-colors">WhatsApp</Button>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-foreground">Dynamic Fields</label>
                <div className="flex flex-wrap gap-2">
                  {['Name', 'Company', 'My Name', 'Date'].map(field => (
                    <Badge key={field} variant="outline" className="px-3 py-1 cursor-pointer hover:bg-[#4fb8b2] hover:text-white transition-colors border-border text-muted-foreground">
                      {'{{' + field.toLowerCase().replace(' ', '_') + '}}'}
                    </Badge>
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground mt-2 italic font-sans">Click to insert fields into your message</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <label className="text-sm font-bold text-foreground">Message Content</label>
            <textarea 
              className="w-full min-h-[250px] p-6 rounded-2xl bg-accent border-none focus:ring-2 focus:ring-[#4fb8b2] dark:focus:ring-[#4fb8b2] transition-all font-sans text-foreground placeholder:text-muted-foreground resize-none"
              placeholder="Write your message here..."
            />
          </div>

          <div className="flex justify-between items-center pt-6">
            <Button variant="ghost" className="text-[#4fb8b2] font-bold hover:bg-[#4fb8b2]/10 rounded-xl transition-colors">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Enhance
            </Button>
            <div className="flex gap-3">
              <Button asChild variant="outline" className="rounded-xl border-border px-8 transition-colors">
                <Link to="/templates">Cancel</Link>
              </Button>
              <Button className="bg-[#4fb8b2] hover:bg-lagoon-deep text-white rounded-xl px-10 shadow-lg shadow-[#4fb8b2]/20 border-none transition-all">
                <Save className="h-4 w-4 mr-2" />
                Save Template
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function Badge({ children, variant, className }: { children: React.ReactNode, variant?: any, className?: string }) {
  return (
    <div className={`text-xs font-semibold rounded-full border px-2 py-0.5 ${className}`}>
      {children}
    </div>
  )
}
