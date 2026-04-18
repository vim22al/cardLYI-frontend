import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle2, AlertCircle, Save, Trash2, Edit2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/_app/extracted')({
  component: ExtractedDetailsPage,
})

function ExtractedDetailsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">Extracted Details</h1>
          <p className="text-muted-foreground font-sans">Review and edit the information extracted by AI.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="rounded-xl border-border hover:bg-destructive/10 hover:text-destructive text-muted-foreground transition-colors">
            <Trash2 className="h-4 w-4 mr-2" />
            Discard
          </Button>
          <Button className="bg-[#4fb8b2] hover:bg-lagoon-deep text-white rounded-xl shadow-lg shadow-[#4fb8b2]/20 border-none transition-all">
            <Save className="h-4 w-4 mr-2" />
            Save Contact
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-2xl border-border shadow-sm overflow-hidden bg-card">
            <CardHeader className="bg-accent/30 border-b border-border">
              <CardTitle className="text-lg font-bold text-foreground flex items-center gap-2">
                <Edit2 className="h-4 w-4 text-[#4fb8b2]" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { label: 'Full Name', value: 'John Smith', confidence: 98 },
                  { label: 'Company', value: 'TechInnovate Solutions', confidence: 95 },
                  { label: 'Job Title', value: 'Senior Software Architect', confidence: 92 },
                  { label: 'Email', value: 'john.smith@techinnovate.com', confidence: 99 },
                  { label: 'Phone', value: '+1 (555) 123-4567', confidence: 94 },
                  { label: 'Website', value: 'www.techinnovate.com', confidence: 88 },
                ].map((field) => (
                  <div key={field.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-semibold text-foreground">{field.label}</label>
                      <Badge variant="outline" className="text-[10px] h-4 bg-green-500/10 text-green-600 border-green-500/20">
                        {field.confidence}% match
                      </Badge>
                    </div>
                    <Input defaultValue={field.value} className="bg-accent border-none focus-visible:ring-[#4fb8b2] font-sans" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-[#4fb8b2]/10 p-6 rounded-2xl border border-[#4fb8b2]/20 flex items-center gap-4">
            <CheckCircle2 className="h-6 w-6 text-[#4fb8b2]" />
            <div>
              <p className="font-bold text-foreground font-sans">AI Extraction Successful</p>
              <p className="text-sm text-muted-foreground font-sans">High confidence score for all primary fields.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="rounded-2xl border-border shadow-sm overflow-hidden bg-card">
            <CardHeader className="bg-accent/30 border-b border-border">
              <CardTitle className="text-lg font-bold text-foreground">Original Image</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="aspect-[1.6/1] bg-accent/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border text-muted-foreground italic text-sm">
                Card scan preview will appear here
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-border shadow-sm bg-card">
            <CardHeader>
              <CardTitle className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Helpful Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                  Double check the phone number format. AI sometimes confuses 0 and O in stylized fonts.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
