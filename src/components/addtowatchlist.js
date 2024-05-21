import { useEffect } from "react"

const WatchList=()=>{

    useEffect(()=>{
     Fetching()
    },[])

    const Fetching=()=>{
        const options = {
            method: 'POST',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjdjZjE4YjYxNjRhZjk0MzczZDNlOTg3ODQ0MDM5NCIsInN1YiI6IjY2MzVmMTRmYzkwNTRmMDEyZDhmZDcyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uqlii6kidJjVo3HjOPf_w6gXGJJ3ItEUWjl0ci-LuV4'
            }
          };
          
          fetch('https://api.themoviedb.org/3/account/21250957/watchlist', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    
    return(
        <>
        
        </>
    )
}
export default WatchList