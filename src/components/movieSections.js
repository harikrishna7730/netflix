
import axios from "axios"
import { useEffect, useState } from "react"
import {FaHeart ,FaRegHeart} from "react-icons/fa"
import { Link } from "react-router-dom"
import { UserAuth } from "../context/authContext"
import { db } from "./firebase"
import { arrayUnion,doc,updateDoc } from "firebase/firestore"
import Aos from "aos"
import "aos/dist/aos.css"


const Sections=({title,fetchUrl,item})=>{
    const[saved,setSaved]=useState(false)
    const{user}=UserAuth()

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

    const movieID= doc(db,"users", `${user?.email}`)


    const saveShow=async(item,event)=>{ 
        event.stopPropagation(); 
        if(user?.email){
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID,{
                savedShows:arrayUnion({
                    id:item.id,
                    title: item.title,
                    img: item.backdrop_path,
                })
            })
        }else{
            alert("Please login to save a movies")
        }
    }

    useEffect(()=>{
     Aos.init({duration:2000})
    },[])
    
    return(
    <>
        <h1 className="text-white font-bold md:text-xl p-4 bg-black">{title}</h1>
        <div className="relative flex items-center bg-black">
           <div id={"slider"} className="w-full h-[200px] overflow-auto scrollbar-hide whitespace-nowrap scroll-smooth relative no-scrollbar">
                {
                    movies.map((item,id)=>{
                        return(
                            <Link to={`/player/${item.id}`} data-aos="fade-left" data-aos-duration="500" className="w-[160px] h=[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]  inline-block cursor-pointer relative p-2 ml-4" key={id} >
                            <img className="w-full h-auto block " src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}  />
                            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/45 opacity-0 text-white hover:opacity-100">
                               <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                                {item?.title.slice(0,20)}
                               </p>
                               {/* <p className="white-space-normal text-xs md:text-xs flex justify-center items-center h-full text-center">
                                {item.overview}
                               </p> */}
                               <p onClick={(event) => saveShow(item,event)}> 
                                {like ? (
                                <FaHeart  className="absolute top-4 left-4 text-gray-300 "/>
                                ) : (
                                 <FaRegHeart className="absolute top-4 left-4 text-gray-300 " /> ) }
                                </p>
                                {/* {saved && <p className="absolute bottom-4 left-4 text-green-500">Saved!</p>} */}
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
