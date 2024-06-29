import {  Routes, Route } from "react-router-dom"

import { useNavigate } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "../components/firebase"
import HomeScreen from "../pages/homeScreen"
import SignUpScreen from "../pages/singupScreen"
import { AuthContextProvider } from "../context/authContext"
import SignInScreen from "../pages/signinScreen"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Player from "../pages/player"
import SavedScreen from "../pages/savedScreen"
import SearchScreen from "../pages/searchScreen"
import MovieTrailer from "../components/movieTrailer"
import SearchBar from "../components/searchbar"



const NavigationsStack=()=>{

    return(
        <>
        <AuthContextProvider>
        <ToastContainer theme="dark" />
            <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/signup" Component={SignUpScreen}/>
            <Route path="/signin" Component={SignInScreen}/>
            <Route path="/player/:id" Component={Player}/>
            <Route path="/account" Component={SavedScreen}/>
            <Route path="/search" Component={SearchScreen}/>
            <Route path="/search" element={SearchBar} />
            <Route path="/movie/:id" element={MovieTrailer} />
            </Routes>
        </AuthContextProvider>
           
        </>
    )
}
export default NavigationsStack