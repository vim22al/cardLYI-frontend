import * as React from 'react'
import { Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ThemeProvider } from '@/components/theme-provider'
// import { useAuthStore } from '@/stores/useAuthStore'

import '@/styles.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
  },
})

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'CardLYI' },
    ],
  }),
  shellComponent: RootDocument,
})

function AuthBootstrap({ children }: { children: React.ReactNode }) {
  // const fetchUser = useAuthStore((s: { fetchUser: any }) => s.fetchUser)
  // const isLoading = useAuthStore((s: { isLoading: any }) => s.isLoading)
  const hasBooted = React.useRef(false)

  // React.useEffect(() => {
  //   if (!hasBooted.current) {
  //     hasBooted.current = true
  //     fetchUser()
  //   }
  // }, [fetchUser])

  // if (isLoading) {
  //   return (
  //     <div className="flex min-h-screen flex-col items-center justify-center gap-3">
  //       <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
  //       <p className="text-sm text-muted-foreground">Checking your session…</p>
  //     </div>
  //   )
  // }

  return <>{children}</>
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="light" storageKey="cardlyi-ui-theme">
              <TooltipProvider>
                <AuthBootstrap>
                  {children}
                </AuthBootstrap>
                <Toaster richColors position="bottom-right" />
              </TooltipProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </GoogleOAuthProvider>

        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            { name: 'Tanstack Router', render: <TanStackRouterDevtoolsPanel /> },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}