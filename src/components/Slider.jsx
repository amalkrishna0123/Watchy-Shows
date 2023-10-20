import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original"
const screenWidth = window.innerWidth;
function Slider() {
    const [movieList, SetMovieList] = useState([]);
    const elementRef = useRef()
    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = ()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            SetMovieList(resp.data.results);
        })
    }

    const SliderRight = (element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const SliderLeft = (element)=>{
        element.scrollLeft-=screenWidth-110
    }
  return (
        <div>
            <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>SliderLeft(elementRef.current)}/>
            <HiChevronRight className='hidden md:block text-white text-[30px] absolute right-0 mt-[150px]' onClick={()=>SliderRight(elementRef.current)}/>
        <div className='flex overflow-x-auto w-full px-16  scroll-smooth' ref={elementRef}>
            {movieList.map((item,index)=>(
                <img src= {IMAGE_BASE_URL+item.backdrop_path} className=' min-w-full md:h-[310px] object-cover object-top mr-5 rounded-md scrollbar-hide hover:border-[1px] md:hover:border-[4px] border-gray-600 transition-all duration-150 ease-in'  />
            ))}
        </div>
        </div>

    )
}

export default Slider
