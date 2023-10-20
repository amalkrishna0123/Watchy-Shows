import React from 'react'
import GenresList from '../constant/GenresList'
import MovieList from './MovieList'

function GenereMovieList() {
  return (
    <div>
      {GenresList.genere.map((item,index)=>index<=4&&(
        <div className=' px-8 md:px-16'>
            <h2 className='text-white text-[20px] font-bold'>{item.name}</h2>
            <MovieList genereId = {item.id}/>
        </div>
      ))}
    </div>
  )
}

export default GenereMovieList
