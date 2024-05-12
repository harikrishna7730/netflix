import { Link, useNavigate } from "react-router-dom"
import { UserAuth } from "../context/authContext"
import { useState } from "react"

const SignInSection=()=>{
    const{user,logIn}=UserAuth()

    const[name,setName]= useState("")
    const[email,setEmail]= useState("")
    const[password,setPassword]= useState("")
  
    // const[passwordErr,setPasswordErr]=useState("")
  
    const navigate= useNavigate()
  
    const handleSubmit=async(e)=>{
      e.preventDefault()
      try{
        await logIn(email,password)
        navigate("/")
      }catch(error){
        console.log(error)
      }
    }
    return(
        <>
    <div className="w-full h-screen ">
     <img src="https://to.watch-films.online/Kk.jpg" className="hidden sm:block absolute w-full h-full object-cover" alt="hello"  width={140} height={130}/>
     <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input type="email"
                onChange={(e)=>setEmail(e.target.value)}
                 placeholder="Enter your Email"
                 className="p-3 my-2 bg-gray-700 rounded"
                 />
                <input type="password" 
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="p-3 my-2 bg-gray-700 rounded"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">sign Up </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p><input className="mr-2" type="checkbox"/>Remember</p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8"><span className="text-gray-600">Already subscribed to Netflix?</span>
                <Link to={"signin"}>Sign In</Link>
                </p>
            </form>
          </div>
        </div>
      </div>
     </div>
        </>
    )
}
export default SignInSection