
import { UserAuth } from "../context/authContext"
import { db } from "./firebase"
import { doc,onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"

const SavedShows=({item})=>{
    const[movies,setMovies]=useState([])
    const{user}=UserAuth();

    useEffect(()=>{
    onSnapshot(doc(db,"users",`${user?.email}`),(doc)=>{
        setMovies(doc.data()?.savedShows)
    })
    },[user?.email]);

    return( 
        <>
        <div className="absolute top-[200px]">
        <h1 className="text-white font-bold text-6xl pb-5 pl-4 bg-black underline underline-offset-8">My shows</h1>
        <div className="relative flex items-center bg-black">
           <div className="w-full h-[200px] overflow-auto scrollbar-hide whitespace-nowrap scroll-smooth relative no-scrollbar">
                {
                    movies.map((item,id)=>{
                        return(
                            <div className="w-[160px] h=[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  inline-block cursor-pointer relative p-2 ml-4" key={id} >
                            <img className="w-full h-auto block " src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title}  />
                            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/45 opacity-0 text-white hover:opacity-100">
                               <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                                {item?.title}
                               </p>
                            </div>
                            </div>
                        )
                    })
                }
           </div>
        </div>

        </div>

        </>
    )
}
export default SavedShows