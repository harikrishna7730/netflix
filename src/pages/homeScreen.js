import { useNavigate } from "react-router-dom"
import request from "../api-requests/responses"
import MainScreen from "../components/main"
import Sections from "../components/movieSections"
import NavbarSection from "../components/navbar"

const HomeScreen=()=>{
    const navigate=useNavigate()
    return(
        <>
        <NavbarSection/>
        <MainScreen/>
        <Sections title="Upcoming" fetchUrl={request.Upcoming} navigate={navigate}/>
        <Sections title="popular" fetchUrl={request.popular} navigate={navigate}/>
        <Sections title="TopRated" fetchUrl={request.TopRated} navigate={navigate}/>
        <Sections title="Horror" fetchUrl={request.Horror} navigate={navigate}/>
        <Sections title="Trending" fetchUrl={request.Trending} navigate={navigate}/>
        </>
    )
}
export default HomeScreen