import {Inter} from 'next/font/google'
import "./globals.css"
import SideBar  from '@/components/MyComponents/SideBar'
import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
//import CustomToggleSidebar from "@/components/MyComponents/CustomToggleSidebar"

export const metadata = {
  title: 'Fintech Dashboard',
  description: 'Generated by Next.js',
}

const inter = Inter({
  subsets: ['latin'],
 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <SidebarProvider>
          <SideBar/>
            <main className='container mx-auto'>
            <SidebarTrigger/>
            {children}
            </main>
        
        </SidebarProvider>
        
        </body>
    </html>
  )
}
