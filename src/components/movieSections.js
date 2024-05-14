
import axios from "axios"
import { useEffect, useState } from "react"
import {FaHeart ,FaRegHeart} from "react-icons/fa"
import { GiTransparentSlime } from "react-icons/gi"
import { Link } from "react-router-dom"



const Sections=({title,fetchUrl})=>{

    const[movies,setMovies]=useState([])
    const[like ,setLike]=useState(false)

    useEffect(()=>{
       axios.get(fetchUrl).then((res)=>{
            setMovies(res.data.results)
       }).catch((err)=>{
        console.log(err)
       })
    },[fetchUrl])

    // console.log(movies)
    
    return(
    <>
        <h1 className="text-white font-bold md:text-xl p-4 bg-black">{title}</h1>
        <div className="relative flex items-center bg-black">
           <div id={"slider"} className="w-full h-[200px] overflow-auto scrollbar-hide whitespace-nowrap scroll-smooth relative no-scrollbar">
                {
                    movies.map((item,id)=>{
                        return(
                            <Link to={`/player/${item.id}`} className="w-[160px] h=[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  inline-block cursor-pointer relative p-2 ml-4" key={id} >
                            <img className="w-full h-auto block " src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}  />
                            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/45 opacity-0 text-white hover:opacity-100">
                               <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                                {item?.title}
                               </p>
                               <p> 
                                {like ? <FaHeart  className="absolute top-4 left-4 text-gray-300 "/> : <FaRegHeart className="absolute top-4 left-4 text-gray-300 " />  }
                                </p>
                            </div>
                            </Link>
                        )
                    })
                }
           </div>
        </div>
    </>
    )
}
export default Sections
