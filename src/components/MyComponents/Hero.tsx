import Image from 'next/image'
import React from 'react'
import {Send, BanknoteArrowDown,Wifi} from 'lucide-react'


function Hero() {
  return (
    <>
    <section>
          <div className="px-6 container mx-auto">
               <div className='mb-6 rounded-xl md:w-full hero-image flex flex-col md:flex-row p-8 md:justify-between'>
                    <div className='md:w-1/2 '>
                         <p className='md:text-3xl text-2xl text-white '>Your business loves smart moves!</p>
                         <p className='text-white mt-1 mb-9'>6% for enterpreneurs and businesses</p>
                         <button className='bg-[#82BC00] text-white px-6 py-3 rounded'>Deatils</button>
                    </div>
                    <div className='md:w-1/2 mt-12 md:mt-0 flex justify-end'>
                         <Image src='/desk.png' alt='desk' width={317} height={202}/>
                    </div>
               </div>
               <div className='bg-white rounded-xl shadow-md p-7 w-full'>
                    <h2 className='mb-3 text-[#15334A] text-xl font-semibold'>Quick Actions</h2>
                    <div className='flex justify-around items-center'>
                         <div className='flex flex-col items-center justify-center'>
                              <div className='bg-[#F2F5F7] rounded-full w-[58px] h-[58px] flex justify-center items-center cursor-pointer '>
                              <Send size={20} strokeWidth={1.75} />
                              </div>
                              <p>Send</p>
                         </div>
                         
                         <div className='flex flex-col items-center justify-center'>
                              <div className='bg-[#F2F5F7] rounded-full w-[58px] h-[58px] flex justify-center items-center cursor-pointer '>
                                   <Image src='/receive.svg' alt='deposit' width={28} height={28}/>
                              </div>
                              <p>Deposit</p>
                         </div>
                         <div className='flex flex-col items-center justify-center'>
                              <div className='bg-[#F2F5F7] rounded-full w-[58px] h-[58px] flex justify-center items-center cursor-pointer '>
                                   <BanknoteArrowDown size={25} strokeWidth={1.75} />
                              </div>
                              <p>Withdraw</p>
                         </div>
                         <div className='flex flex-col items-center justify-center'>
                              <div className='bg-[#F2F5F7] rounded-full w-[58px] h-[58px] flex justify-center items-center cursor-pointer '>
                                   <Wifi size={25} strokeWidth={1.75} />
                              </div>
                              <p>Data</p>
                         </div>
                    </div>

               </div>
          </div>
    </section>
    </>
  )
}

export default Hero