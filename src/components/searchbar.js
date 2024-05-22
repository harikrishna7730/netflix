
// const SearchBar=()=>{
    
//     return(
//         <>
//         <h1 className="text-white">Search bar page</h1>

//         </>
//     )
// }
// export default SearchBar

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const { results, query } = location.state || { results: [], query: '' };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="p-4 border rounded hover:bg-gray-200">
              <Link to={`/movie/${result.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt={result.title}
                  className="w-[250px] h-[250px] object-cover mb-2"
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
                
            </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
