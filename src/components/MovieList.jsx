import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"
import HrMovieCard from './HrMovieCard';

function MovieList({ genereId, index_ }) {
    const [movieList, SetMovieList] = useState([])
    const elementRef = useRef(null)
    useEffect(() => {
        getMovieByGenereId();
    }, [])
    const getMovieByGenereId = () => {
        GlobalApi.getMovieByGenreId(genereId).then(resp => {
            // console.log(resp.data.results)
            SetMovieList(resp.data.results);
        })
    }
    // const SliderLeft = (element) => {
    //     element.scrollLeft -= 800
    // }
    // const SliderRight = (element) => {
    //     element.scrollLeft += 800
    // }
    return (
        <div>
            {/* <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer' onClick={() => SliderLeft(elementRef.current)} /> */}

            <div ref={elementRef} className='flex overflow-x-auto gap-8
                scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
                {movieList.map((item, index) => (
                    <>
                        {index_ % 3 == 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
                    </>
                ))}
            </div>
            {/* <HiChevronRight className='hidden md:block text-white text-[30px] absolute right-0 mt-[150px]' onClick={() => SliderRight(elementRef.current)} /> */}
        </div>

    )
}

export default MovieList
