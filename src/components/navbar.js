// import {  Link, useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/authContext";
// import { useState } from "react";
// import axios from "axios";

// const NavbarSection = () => {
//   const {user, logOut}=UserAuth();
//   const[search,setSearch]=useState()

//   const Navigate=useNavigate()

//   const handleLogout=async()=>{
//     try{
//    await logOut();
//    Navigate("/signin")
//     }catch(error){
//       console.log(error)
//       alert("rendered.......")
//     }
//   }

//   const handleAccount=()=>{
//     Navigate("/account")
//   }

//   const HandleSearch=async(e)=>{
//    e.preventDefault()
//    if(!search.trim()) return 
//    try{
//     const result=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1b7cf18b6164af94373d3e9878440394=${search}`)
//     console.log(result.data.results)
//     setSearch(result.data.results)

//    }
//   catch(error){
//     console.log(error)
//    }
//   }


//   return (
//     <>
//       <div className="flex items-center justify-between p-4 flex-row w-full cursor-pointer absolute z-[100]">
//         <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" className="z-10 ml-4 mt-2" alt="hello"  width={140} height={130}/>
//         <div>
//         <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)}
//          name="search"
//          id="search"
//          placeholder="Search"
//         className="relative z-10 bg-transparent w-10 h-11 rounded-full border focus:w-full focus:border-white-100 outline-none cursor-pointer focus:cursor-text pl-12 focus:pl-16 text-white" name="search" id="search" ></input>
//         <svg xmlns="http://www.w3.org/2000/svg" onDoubleClick={HandleSearch} viewBox="0 0 24 24" fill="white" className="w-30 h-12 absolute inset-y-0 my-auto px-3.5 border-r border-r-transparent peer-focus:border-white  peer-focus:stroke-white">
//           <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
//           <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clip-rule="evenodd" />
//         </svg>

//         {/* <img src="/search.png" alt="search" width={40} height={40} className="inline relative right-[50px]  "/> */}
//         </div>
//         <div className="">
//           <button className="cursor-pointer text-white font-bold px-3 py-1 text-xl hover:text-sky-400 hover:underline" onClick={handleAccount} >Account</button>
//           <button className="cursor-pointer bg-red-600  rounded text-white font-bold px-6 py-3 ml-3 text-xl"onClick={handleLogout}  >Logout</button>
//         </div>
//       </div>
//     </>
//   )
// }
// export default NavbarSection;

// import { Link, useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/authContext";
// import { useState } from "react";
// import axios from "axios";

// const NavbarSection = () => {
//   const { user, logOut } = UserAuth();
//   const [search, setSearch] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logOut();
//       navigate("/signin");
//     } catch (error) {
//       console.log(error);
//       alert("Error logging out");
//     }
//   };

//   const handleAccount = () => {
//     navigate("/account");
//   };

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (!search.trim()) return;

//     try {
//       const result = await axios.get(
//         `https://api.themoviedb.org/3/search/movie?api_key=1b7cf18b6164af94373d3e9878440394&query=${search}`
//       );
//       setSearchResults(result.data.results);
//       console.log(result.data.results);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return s(
//     <>
//       <div className="flex items-center justify-between p-4 flex-row w-full cursor-pointer absolute z-[100]">
//         <img
//           src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
//           className="z-10 ml-4 mt-2"
//           alt="TMDB"
//           width={140}
//           height={130}
//         />
//         <div className="relative">
//           <form onSubmit={handleSearch} className="flex items-center">
//             <input
//               type="search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               // className="relative z-10 bg-transparent w-10 h-11 rounded-full border focus:w-full focus:border-white outline-none cursor-pointer focus:cursor-text pl-12 focus:pl-16 text-white transition-all duration-300"
//               name="search"
//               id="search"
//               placeholder="Search"
//               aria-label="Search movies"
//             />
//             <button type="submit" aria-label="Search" className="absolute inset-y-0 right-0 my-auto px-3.5">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
//                 <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
//                 <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clipRule="evenodd" />
//               </svg>
//             </button>
//           </form>
//           {searchResults.length > 0 && (
//             <div className="absolute left-[-500px] top-20 bg-gray-800 w text-white flex flex-row flex-nowrap rounded-lg mt-2 w-[800px] p-4 gap-4">
//               {searchResults.map((result) => (
//                 <div key={result.id} className="flex flex-row  w-full h-80 p-2 border-b border-gray-700 hover:bg-gray-700">
//                   <Link to={`/movie/${result.id}`} className="flex flex-col">
//                     <img
//                       src={`https://image.tmdb.org/t/p/w92/${result.poster_path}`}
//                       alt={result.title}
//                       className="w-[250px] h-[250px] object-cover"
//                     />
//                     <div className="text-center mt-2">
//                       <h3 className="text-lg">{result.title}</h3>
//                       <p className="text-sm text-gray-400">{result.release_date}</p>
//                     </div>
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <div>
//           <button
//             className="cursor-pointer text-white font-bold px-3 py-1 text-xl hover:text-sky-400 hover:underline"
//             onClick={handleAccount}
//           >
//             Account
//           </button>
//           <button class="cursor-pointer relative group overflow-hidden rounded-lg border-2 px-8 py-2 border-green-500" onClick={handleLogout}>
//             <span class="font-bold text-white text-xl relative z-10 group-hover:text-white duration-500">Logout</span>
//             <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:-translate-x-full h-full"></span>
//             <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-x-full h-full"></span>
//             <span class="absolute top-0 left-0 w-full bg-green-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
//             <span class="absolute delay-300 top-0 left-0 w-full bg-green-500 duration-500 group-hover:translate-y-full h-full"></span>
//         </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavbarSection;

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
          className="z-10 ml-4 mt-2"
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
              className="relative  z-10 bg-transparent w-10 h-11 rounded-full border focus:w-full focus:border-white outline-none cursor-pointer focus:cursor-text pl-12  focus:pl-16 focus:pr-4 text-white transition-all duration-300"
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

