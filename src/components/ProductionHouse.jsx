import React from 'react'
import disney from "./../assets/disney.jpg"
import marvel from "./../assets/marvel.jpg"
import NG from "./../assets/NG.jpg"
import SW from "./../assets/SW.jpg"
import pixar from "./../assets/pixar.jpg"
import disneybg from "./../assets/disneybg.mp4"
import marvelbg from "./../assets/marvelbg.mp4"
import NGbg from "./../assets/NGbg.mp4"
import pixarbg from "./../assets/pixarbg.mp4"
import SWbg from "./../assets/SWbg.mp4"

function ProductionHouse() {
    const ProductionHouseList = ([
        {
            id : 1,
            image : disney,
            video : disneybg
        },
        {
            id : 2,
            image : pixar,
            video : pixarbg
        },
        {
            id : 3,
            image : marvel,
            video : marvelbg 
        },
        {
            id : 4,
            image : SW,
            video : SWbg 
        },
        {
            id : 5,
            image : NG,
            video : NGbg
        }
           
    

    ])
  return (
    <div className=' flex gap-2 md:gap-5 p-2 px-5 md:px-16'> 
      {ProductionHouseList.map((item)=>(
        <div className=' border-[2px] border-gray-500 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer  shadow-xl shadow-black relative'>
            <img src={item.image} alt="" className=' w-full rounded-lg mix-blend-screen z-[1]'/>
            <video src={item.video} autoPlay loop playsInline className=' absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'/>
        </div>
      ))}
    </div>
  )
}

export default ProductionHouse
