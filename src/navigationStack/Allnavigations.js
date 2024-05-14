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



const NavigationsStack=()=>{

    // const navigate=useNavigate()
    // useEffect(()=>{
    //  onAuthStateChanged(auth, async(user)=>{
    //         if(user){
    //             console.log("Logged In")
    //             navigate("/");
    //         }else{
    //             console.log("Logged out")
    //             navigate("/login");
    //         }
    //     })
    // },[])

    return(
        <>
        <AuthContextProvider>
        <ToastContainer theme="dark" />
            <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route path="/signup" Component={SignUpScreen}/>
            <Route path="/signin" Component={SignInScreen}/>
            <Route path="/player/:id" Component={Player}/>
            </Routes>
        </AuthContextProvider>
           
        </>
    )
}
export default NavigationsStack