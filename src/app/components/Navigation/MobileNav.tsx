import React from 'react'
import { CiMenuBurger } from "react-icons/ci";

const MobileNav = () => {
  return (
    <div className='flex md:hidden'>
        <CiMenuBurger size={26} className='text-[#64ffda]'/>
    </div>
  )
}

export default MobileNav
