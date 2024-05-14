import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Player=()=>{
    const{id}=useParams();
    const navigate=useNavigate();

    const[player,setPlayer]=useState({
        name:" ",
        key:" ",
        published_at:" ",
        type:" "
    })

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjdjZjE4YjYxNjRhZjk0MzczZDNlOTg3ODQ0MDM5NCIsInN1YiI6IjY2MzVmMTRmYzkwNTRmMDEyZDhmZDcyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uqlii6kidJjVo3HjOPf_w6gXGJJ3ItEUWjl0ci-LuV4'
        }
      };
      
   useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setPlayer(response.results[0]))
    .catch(err => console.error(err)); 

   },[])

     
    return(
        <>
         <div className="h-full w-full flex flex-col justify-center bg-black ">
            <img src="/left-arrow.png" className="absolute top-4 left-8 w-[50px] cursor-pointer z-10 hover:bg-red-700 hover:rounded-full" alt="back" height={100} width={100} onClick={()=>navigate(-2)}/>
            <iframe width="98%" height="90%"
             src={`https://www.youtube.com/embed/${player.key}`}
             title="Trailer"
             className=" h-[650px] align-middle relative top-20 left-4 bg-black"
             allowFullScreen
              ></iframe>
              {/* <div className="text-white flex  justify-between align-bottom z-10 ml-8  w-[80%]">
                <p>{player.published_at.slice(0,10)}</p>
                <p>{player.name}</p>
                <p>{player.type}</p>
              </div> */}
         </div>
        </>
    )
}
export default Player;

// {
//     "id": 550,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Fight Club (1999) Trailer - Starring Brad Pitt, Edward Norton, Helena Bonham Carter",
//         "key": "O-b2VfmmbyA",
//         "site": "YouTube",
//         "size": 720,
//         "type": "Trailer",
//         "official": false,
//         "published_at": "2016-03-05T02:03:14.000Z",
//         "id": "639d5326be6d88007f170f44"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "#TBT Trailer",
//         "key": "BdJKm16Co6M",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2014-10-02T19:20:22.000Z",
//         "id": "5c9294240e0a267cd516835f"
//       }
//     ]
//   }