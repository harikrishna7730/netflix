import request from "../api-requests/responses"
import MainScreen from "../components/main"
import Sections from "../components/movieSections"
import NavbarSection from "../components/navbar"

const HomeScreen=()=>{
    return(
        <>
        <NavbarSection/>
        <MainScreen/>
        <Sections title="Upcoming" fetchUrl={request.Upcoming}/>
        <Sections title="popular" fetchUrl={request.popular}/>
        <Sections title="TopRated" fetchUrl={request.TopRated}/>
        <Sections title="Horror" fetchUrl={request.Horror}/>
        <Sections title="Trending" fetchUrl={request.Trending}/>
        </>
    )
}
export default HomeScreen