import React, { useState } from 'react'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2"
import { HiPlus, HiDotsVertical } from "react-icons/hi"
import NavBarItems from './NavBarItems'

function NavBar() {
  const [toggle, SetToggle] = useState(false)
  const menu = ([
    {
      name: "HOME",
      icon: HiHome
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass
    }, {
      name: "WATCHLIST",
      icon: HiPlus
    }, {
      name: "ORIGINALS",
      icon: HiStar
    }, {
      name: "MOVIES",
      icon: HiPlayCircle
    }, {
      name: "SERIES",
      icon: HiTv
    }

  ])
  return (
    <div className=' flex items-center justify-between p-5'>
      <div className=' flex items-center gap-8'>
        <img src="src/assets/watchyshows-removebg-preview.png" className=' w-[115px] md:w-[130px] lg:w-[150px] object-cover' alt="" />

        <div className='hidden md:flex gap-8'>
          {menu.map((item) => (
            <NavBarItems name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className='flex md:hidden gap-5'>
          {menu.map((item, index) => index < 3 && (
            <NavBarItems name={''} Icon={item.icon} />
          ))}
          <div className=' md:hidden' onClick={()=>SetToggle(!toggle)}>
            <NavBarItems name={''} Icon={HiDotsVertical} />
            {toggle ?<div className='absolute mt-3 bg-[#131313] border-[.5px]
             border-gray-800 px-5 py-4 p-3'>
              {menu.map((item, index) => index >= 3 && (
                <NavBarItems name={item.name} Icon={item.icon} />
              ))}
            </div> : null}
          </div>
        </div>
      </div>
      <img src="src/assets/profile.png" className=' w-[40px] rounded-full' alt="" />
    </div>

  )
}

export default NavBar
