// import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";

const MainScreen = () => {
  const [movies, setMovies] = useState([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  useEffect(() => {
    FetchingApi();
  }, []);
// Change the movie every 2 seconds
  useEffect(() => {
    if (movies.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
      }, 3000); 
      
      return () => clearInterval(intervalId);
    }
  }, [movies]);

  const FetchingApi = async () => {
    try {
      const result = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=1b7cf18b6164af94373d3e9878440394&language=en-US&page=1"
      );
      setMovies(result.data.results);
      //console.log(result.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const movie = movies[currentMovieIndex];

  return (
 <div className="">
  <div className="w-full h-[700px] text-white">
    <div className="w-full h-full relative">
      <div className="w-full h-[600px] absolute bg-gradient-to-r from-black"></div>
      {movie && (
        <img
          className="w-full h-full absolute top-0 left-0 object-cover  sm:h-[400px] md:h-[700px]"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
        />
      )}
      <div className="absolute w-full top-[30%] px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold ml-1 sm:ml-2">{movie?.title}</h1>

        <div className="flex flex-wrap items-center gap-2 mt-3 ml-1 sm:ml-2">
          <button className="text-sm sm:text-lg bg-white rounded-sm cursor-pointer text-black px-3 sm:px-4 py-1.5 sm:py-2 border-black hover:bg-slate-400 hover:border-solid hover:border-black font-bold flex items-center">
            <img src="/play.png" alt="/" width={18} className="inline mr-2 -mt-[2px]" />
            Play
          </button>

          <button className="text-sm sm:text-base border-solid border-2 border-white px-3 py-1.5">
            Watch Later
          </button>
        </div>

        <h2 className="text-gray-300 text-xs sm:text-sm mx-1 sm:mx-2 my-2">
          Release Date: {movie?.release_date}
        </h2>

        <p className="text-sm ml-1 sm:ml-2 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]">
          {movie?.overview.slice(0, 200)}
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default MainScreen;
