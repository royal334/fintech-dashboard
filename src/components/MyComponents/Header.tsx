import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarImage,AvatarFallback } from "@/components/ui/avatar"


function Header() {

  return (
     <>
     <div className='flex justify-between items-center p-4 w-full md:hidden'>
               <div className='flex items-center w-[44px] h-[44px] rounded-full bg-[#F2F5F7] justify-center'>
                    <Image src='/group.png' alt='menu' width={12} height={10} />
               </div>
               <Image src='/logo.png' alt='logo' width={160} height={30} />
               <div  className='flex items-center w-[44px] h-[44px] rounded-full bg-[#F2F5F7] justify-center'>
                    <Image src='/notification-bell.png' alt='notification' width={14} height={16}/>
               </div>
     </div>
     

     <header>
          <div className='hidden md:flex justify-between items-center px-8 py-4 w-full container mx-auto'>
               <div>
                    <h1 className='text-[#15334A] font-semibold text-[38px]'>Home</h1>
               </div>

               <div className='flex items-center space-x-4'>
                    <div className='w-[48px] h-[48px] rounded-full bg-[#F2F5F7] flex items-center justify-center'>
                         <Image src='/night-mode.png' alt='night mode' width={15} height={17}/>
                    </div>
                    <div  className='w-[48px] h-[48px] rounded-full bg-[#F2F5F7] flex items-center justify-center'>
                         <Image src='/notification-bell.png' alt='night mode' width={15} height={17}/>
                    </div>
                    <div >
                         <Avatar>
                              <AvatarImage src='/avatar.jpeg'/>
                              <AvatarFallback>R</AvatarFallback>
                         </Avatar>
                    </div>
                    <div>
                         <p className='text-[#15334A] font-bold'>Royal</p>
                         <p>Rabita Bank</p>
                    </div>
               </div>
          </div>
     </header>
     </>
  )
}

export default Header