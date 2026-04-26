import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/stores/useAuthStore'

export const Route = createFileRoute('/_app/admin/analytics/revenue')({
  beforeLoad: () => {
    const user = useAuthStore.getState().user;
    if (user?.userType !== 'admin') {
      throw redirect({ to: '/dashboard' });
    }
  },
  component: AdminAnalyticsRevenuePage,
})

function AdminAnalyticsRevenuePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground font-sans">Revenue Analytics</h1>
      <p className="text-muted-foreground font-sans">View revenue and subscription metrics.</p>
    </div>
  )
}
