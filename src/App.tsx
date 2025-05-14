import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ThemeProvider } from '@/components/theme-provider'
// import { Toaster } from '@/components/ui/sonner'
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { routes } from './routes'
  
const queryClient = new QueryClient()
const router = createBrowserRouter(routes)

export default function App() {
  return (
    <QueryClientProvider client={queryClient}> 
      {/* <ThemeProvider defaultTheme="system" storageKey="edtech-theme"> */}
        <RouterProvider router={router} />
        {/* <Toaster position="top-right" /> */}
      {/* </ThemeProvider> */}
    </QueryClientProvider>
  )
}