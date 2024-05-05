import axios from "axios"
import { useEffect, useState } from "react"


const Sections=({title,fetchUrl})=>{

    const[movies,setMovies]=useState([])

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
        <h1 className="text-white text-xl font-bold p-3">{title}</h1>
        <div className="relative flex items-center">
           <div id={"slider"}>
                {
                    movies.map((item,id)=>{
                        return(
                            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block " key={id} >
                            <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} className="p-2 hover:opacity-[30]" />
                            </div>
                        )
                    })
                }
           </div>
        </div>
        </>
    )
}
export default Sections
