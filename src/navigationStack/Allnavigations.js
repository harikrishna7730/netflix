import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../pages/homeScreen"
import SingupScreen from "../pages/singupScreen"

const NavigationsStack=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomeScreen}/>
            <Route  path="/singup" Component={SingupScreen}/>
        </Routes>
        </BrowserRouter>
        
        </>
    )
}
export default NavigationsStack