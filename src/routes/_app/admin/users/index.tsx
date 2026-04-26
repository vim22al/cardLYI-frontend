import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/useAuthStore'

export const Route = createFileRoute('/_app/admin/users/')({
  beforeLoad: () => {
    const user = useAuthStore.getState().user;
    if (user?.userType !== 'admin') {
      throw redirect({ to: '/dashboard' });
    }
  },
  component: AdminUsersPage,
})

function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">User Management</h1>
      <p className="text-muted-foreground font-sans">Manage application users here.</p>
    </div>
  )
}
