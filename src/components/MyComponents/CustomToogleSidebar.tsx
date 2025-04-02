import React from 'react'
import { useSidebar } from '../ui/sidebar'
import Image from 'next/image'

function CustomToogleSidebar() {

     const {toggleSidebar} = useSidebar()

  return (
    <button onClick={toggleSidebar}>
          <Image src='/menu.png' alt='menu' width={24} height={24}/>
    </button>
  )
}

export default CustomToogleSidebar