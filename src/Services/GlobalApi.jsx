import axios from "axios"

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "b5f7346e61c4be4eb18c27155a5f7f29";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=b5f7346e61c4be4eb18c27155a5f7f29';

//https://api.themoviedb.org/3/trending/all/day?api_key=b5f7346e61c4be4eb18c27155a5f7f29
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}