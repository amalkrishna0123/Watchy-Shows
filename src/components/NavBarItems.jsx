import React from 'react'

function NavBarItems({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 transition-all duration-500 mb-2'>
       <Icon/>
       <h2 className='transition-all duration-500'>{name}</h2>
    </div>
  )
}

export default NavBarItems
