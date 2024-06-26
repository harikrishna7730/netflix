

import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";
import { useState } from "react";
import axios from "axios";

const NavbarSection = () => {
  const { user, logOut } = UserAuth();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/signin");
    } catch (error) {
      console.log(error);
      alert("Error logging out");
    }
  };

  const handleAccount = () => {
    navigate("/account");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=1b7cf18b6164af94373d3e9878440394&query=${search}`
      );
      setSearchResults(result.data.results);
      navigate('/search', { state: { results: result.data.results, query: search } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 flex-row w-full cursor-pointer absolute z-[100]">
      <Link to={"/"}>
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          className="z-10 ml-4 mt-2 md:w-[100px] md:text-center"
          alt="TMDB"
          width={140}
          height={130}
        />
      </Link>
        <div className="relative left-[300px]">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" bg-transparent rounded-full "
              name="search"
              id="search"
              placeholder="Search"
              aria-label="Search movies"
            />
            <button type="submit" aria-label="Search" className="absolute inset-y-0 right-0 my-auto px-3.5">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="white" className="w-30 h-12 absolute  cursor-pointer inset-y-0 my-auto px-3.5 border-r border-r-transparent peer-focus:border-white stroke-gray-500   peer-focus:stroke-white">                 
                <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
            </svg>
           </button>
          </form>

        </div>
        <div>
          <button
            className="cursor-pointer text-white font-bold px-3 py-1 text-xl hover:text-sky-400 hover:underline"
            onClick={handleAccount}
          >
            Account
          </button>
          <button
            className="cursor-pointer bg-red-600 rounded text-white font-bold px-6 py-3 ml-3 text-xl"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarSection;

