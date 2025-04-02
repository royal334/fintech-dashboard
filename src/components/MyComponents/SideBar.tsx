import React from 'react'
import { Sidebar, SidebarContent, SidebarMenu, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenuButton, SidebarMenuItem, } from '@/components/ui/sidebar'
import Image from 'next/image'
import CustomToogleSidebar from './CustomToogleSidebar'


import Link from 'next/link'
function SideBar() {

     type Content={
          title: string,
          icon: string,
          link: string
     } 


     const contents:Content[] = [
          {
               title: 'Home',
               icon: '/Home.png',
               link: '/'
          },

          {
               title: 'Card',
               icon: '/card.png',
               link: '/'
          },

          {
               title: 'Account',
               icon: '/account.png',
               link: '/'
          },

          {
               title: 'Investment',
               icon: '/investment.png',
               link: '/'
          }
     ]

  return (
     <>
          <Sidebar className='p-4 '>
               <SidebarContent className='bg-white rounded-lg'>
                    <SidebarGroup>
                         <SidebarGroupLabel> <Image src='/logo.png' alt='logo' width={160} height={30} /> </SidebarGroupLabel>
                              <SidebarGroupContent>
                                   <SidebarMenu className='mt-[70px]'>
                                        { contents.map((content) =>(
                                             <SidebarMenuItem>
                                             <SidebarMenuButton className='my-3'>
                                                  <Link href='/' className=' flex items-center space-x-2 '>
                                                       <Image src={content.icon} alt='home' width={24} height={24}/>
                                                       <span>{content.title}</span>
                                                  </Link>
                                             </SidebarMenuButton>
                                        </SidebarMenuItem>
                                        ))                           
}

                                   </SidebarMenu>
                              </SidebarGroupContent>
                         
                    </SidebarGroup>
               </SidebarContent>

          </Sidebar>
     </>

  )
}

export default SideBar