import React from 'react'
import { Sidebar, SidebarContent, SidebarMenu, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenuButton, SidebarMenuItem, } from '@/components/ui/sidebar'
import Image from 'next/image'



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
               icon: '/home.svg',
               link: '/'
          },

          {
               title: 'Card',
               icon: '/card.svg',
               link: '/'
          },

          {
               title: 'Account',
               icon: '/account.svg',
               link: '/'
          },

          {
               title: 'Investment',
               icon: '/invest.svg',
               link: '/'
          },

          {
               title: 'Savings',
               icon: '/savings.svg',
               link: '/'
          }
     ]

  return (
     <>
          <Sidebar className=''>
               <SidebarContent className='bg-white rounded-lg'>
                    <SidebarGroup>
                         <SidebarGroupLabel className='my-4'> <Image src='/logo.png' alt='logo' width={160} height={30} /> </SidebarGroupLabel>
                              <SidebarGroupContent>
                                   <SidebarMenu className='mt-6'>
                                        { contents.map((content) =>(
                                             <SidebarMenuItem>
                                             <SidebarMenuButton className='my-3'>
                                                  <Link href='/' className=' flex items-center space-x-2 '>
                                                       <Image src={content.icon} alt='home' width={30} height={24}/>
                                                       <span>{content.title}</span>
                                                  </Link>
                                             </SidebarMenuButton>
                                        </SidebarMenuItem>
                                        ))}
                                   </SidebarMenu>
                              </SidebarGroupContent>
                    </SidebarGroup>
               </SidebarContent>

          </Sidebar>
     </>

  )
}

export default SideBar