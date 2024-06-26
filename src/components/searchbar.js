

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const { results, query } = location.state || { results: [], query: '' };

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="p-4 border rounded  hover:bg-gray-200">
              <Link to={`/movie/${result.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt={result.title}
                  className="w-[180px] h-[250px] object-fill mb-2"
                />
                <div>
                  <h3 className="text-lg font-bold">{result.title}</h3>
                  <p className="text-sm text-gray-600">{result.release_date}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
            <div>
                <img src="/2133716.jpg" alt="page not found" width={600}  className='ml-[500px] mt-8'/>   
                <Link to={"/"}> 
                <button class="bg-cyan-950 text-cyan-400 border absolute left-[700px] top-[600px] border-cyan-400 border-b-4 font-medium overflow-hidden  px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                  <span class="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Back to Home
                </button>
                </Link>
            </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
