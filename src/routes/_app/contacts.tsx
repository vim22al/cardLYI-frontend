import { createFileRoute } from '@tanstack/react-router'
import { Search, Filter, MoreHorizontal, Mail, Phone, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/_app/contacts')({
  component: ContactsPage,
})

const contacts = [
  { id: 1, name: 'Alice Johnson', email: 'alice@horizon.com', company: 'Horizon Tech', role: 'CTO', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@buildit.io', company: 'BuildIt Solutions', role: 'Founder', status: 'Warm' },
  { id: 3, name: 'Charlie Davis', email: 'charlie@nexus.net', company: 'Nexus Systems', role: 'Product Manager', status: 'New' },
  { id: 4, name: 'Diana Prince', email: 'diana@themyscira.co', company: 'Amazonia Group', role: 'Director', status: 'Active' },
  { id: 5, name: 'Edward Norton', email: 'edward@pulp.com', company: 'Pulp Fiction', role: 'Sales Lead', status: 'Cold' },
]

function ContactsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">Contacts</h1>
          <p className="text-muted-foreground font-sans">Manage and communicate with your scanned connections.</p>
        </div>
        <Button className="bg-[#4fb8b2] hover:bg-lagoon-deep text-white rounded-xl shadow-lg shadow-[#4fb8b2]/20 border-none">
          Export All
        </Button>
      </div>

      <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col md:flex-row gap-4 items-center">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search name or company..." className="pl-10 h-10 bg-accent border-none focus-visible:ring-[#4fb8b2]" />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Button variant="outline" size="sm" className="rounded-lg h-9 border-border font-sans transition-colors">
              <Filter className="h-4 w-4 mr-2" />
              Status
            </Button>
            <Button variant="outline" size="sm" className="rounded-lg h-9 border-border font-sans transition-colors">
              Category
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader className="bg-accent/50">
            <TableRow className="hover:bg-transparent border-border">
              <TableHead className="font-bold text-foreground font-sans">Contact</TableHead>
              <TableHead className="font-bold text-foreground font-sans">Company & Role</TableHead>
              <TableHead className="font-bold text-foreground font-sans">Status</TableHead>
              <TableHead className="font-bold text-foreground font-sans text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id} className="border-border hover:bg-accent transition-colors group">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-[#4fb8b2]/10">
                      <AvatarImage src={`https://avatar.vercel.sh/${contact.name}`} />
                      <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-bold text-foreground font-sans">{contact.name}</span>
                      <span className="text-xs text-muted-foreground font-sans">{contact.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium text-foreground font-sans">{contact.company}</span>
                    <span className="text-xs text-muted-foreground font-sans">{contact.role}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant="outline" 
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      contact.status === 'Active' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                      contact.status === 'Warm' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                      contact.status === 'New' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                      'bg-slate-500/10 text-slate-500 border-slate-500/20'
                    }`}
                  >
                    {contact.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-[#4fb8b2] hover:bg-[#4fb8b2]/10 transition-colors">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-[#4fb8b2] hover:bg-[#4fb8b2]/10 transition-colors">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-[#4fb8b2] hover:bg-[#4fb8b2]/10 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-4 bg-accent/30 border-t border-border flex items-center justify-center">
          <Button variant="ghost" size="sm" className="text-[#4fb8b2] font-bold hover:bg-[#4fb8b2]/10">
            View More Contacts
          </Button>
        </div>
      </div>
    </div>
  )
}
