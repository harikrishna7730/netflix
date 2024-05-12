import axios from "axios"
import { useEffect, useState } from "react"
// import request from "../api-requests/responses"

const MainScreen=()=>{

 const [movies,setmovies]=useState([])

 const movie=movies[Math.floor(Math.random() * movies.length)]
// console.log(movie)

useEffect(()=>{
  FetchingApi()
},[])

 const FetchingApi=async()=>{
    try{
        const result=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=1b7cf18b6164af94373d3e9878440394&language=en-US&page=1")
        setmovies(result.data.results)
        console.log(result.data.results)
    }
    catch(err){
      console.error(err)
    }
   }

    return(
      <div className="">
        <div className="w-full h-[600px] text-white">
          <div className="w-full h-full">
            <div className="w-full h-[600px] absolute bg-gradient-to-r from-black "></div>
            <img className="w-full h-full obsolute top-0 left-o"   src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
            <div className="absolute w-full top-[30%]">
            <h1 className="text-4xl font-bold ml-2">{movie?.title}</h1>
              <button className="text-xl bg-white rounded-sm cursor-pointer text-black px-4 py-2 m-3 border-black hover:bg-slate-400  hover:border-solid hover:border-black"><img src="" alt="/"/>Play</button>
              <button className="border-solid border-2 border-white px-2 py-2  mb-1.1">Watch Later</button>
              <h2 className="text-gray-300 text-sm mx-2 my-1">ReleaseDate:{movie?.release_date}</h2>
              <p className="ml-2 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">{movie?.overview}</p>
            </div>
          </div>
        </div>
        </div>
    )
}
export default MainScreen


// import axios from "axios";
// import { useEffect, useState } from "react";

// const MainScreen = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.themoviedb.org/3/movie/popular?api_key=1b7cf18b6164af94373d3e9878440394&language=en-US&page=1"
//         );
//         setMovies(response.data.results);
//         console.log(response.data.results)
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchMovies();
//   }, []);

//   return (
//     <>
//       {movies.map((movie) => (
//         <div key={movie.id}>
//           <h2>{movie.title}</h2>
//           <p>{movie.overview}</p>
//           <p>Release Date: {movie.release_date}</p>
//           <p>Popularity: {movie.popularity}</p>
//         </div>
//       ))}
//     </>
//   );
// };

// export default MainScreen;