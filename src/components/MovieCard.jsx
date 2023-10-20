import React from 'react'
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original"


function MovieCard({movie}) {
  return (
    <>
      <img src={IMAGE_BASE_URL+movie.poster_path} alt="" className='w-[110px] md:w-[200px] rounded-lg hover:border-[4px] border-gray-500 transition-all duration-500 cursor-pointer hover:scale-110'/>
    </>
  )
}

export default MovieCard
