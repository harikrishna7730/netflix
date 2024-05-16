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
            </Routes>
        </AuthContextProvider>
           
        </>
    )
}
export default NavigationsStack