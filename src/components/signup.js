import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";
const SignUpSection = () => {

  const{user,signUp}=UserAuth()

  const[name,setName]= useState("")
  const[email,setEmail]= useState("")
  const[password,setPassword]= useState("")

  // const[passwordErr,setPasswordErr]=useState("")

  const navigate= useNavigate()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      await signUp(email,password)
      navigate("/home")
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
     <div className="w-full h-screen ">
     <img src="https://to.watch-films.online/Kk.jpg" className="hidden sm:block absolute w-full h-full object-cover" alt="hello"  width={140} height={130}/>
     <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                {/* <input type={name}
                 placeholder="Enter your Name"
                 className="p-3 my-2 bg-gray-700 rounded"
                 onChange={(e)=>setName(e.target.value)}
                 autoComplete="username"
                 /> */}
                 <input type="email"
                 placeholder="Enter your Email"
                 className="p-3 my-2 bg-gray-700 rounded"
                 onChange={(e)=>setEmail(e.target.value)}
                 autoComplete="email"
                 required
                 />
                <input type="password"
                placeholder="Enter your Password"
                className="p-3 my-2 bg-gray-700 rounded"
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete="current-password"
                required
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold" type="submit">sign Up </button>
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

  // const [formError, setformError] = useState({
  //   username: null,
  //   emailErr: null,
  //   passwordErr: null,
  // });

  // const HandleChanges = (e) => {
  //   const { name, value } = e.target;
  //   // const email=e.target.value
  //   // const password=e.target.value
  //   // const confirmPassword=e.target.value
  //   setform({
  //     ...(prevState) => prevState,
  //     [name]: value,
  //   });
  //   // switch(name){
  //   //     case "email":
  //   //         if(value.length>6)
  //   //         return({setformError,emailErr:"password should contain at least 6"})
  //   //         break;
  //   //     default :
  //   //     return null
  //   // }
  // }

  // const toggle=()=>{
  //   setOpen(!open)
  // }

  // const HandlePassword=(e)=>{
  //   const password=e.target.value
  //   setPassword(password)
  //   const specialCharecters=/[$#@]/.test(password)
  //   if(password.trim().length<7 || !specialCharecters){
  //     setPasswordErr("Enter valid password")
  //   }else{
  //     setPasswordErr(null)
  //   }
  // }

  // const user_auth = async(event)=>{
  //   event.preventDefault();
  //   if(signState==="Sign In"){
  //     await login(email,password);
  //   }else{
  //     await signup(name,email,password);
  //   }
  // }

 
  //   <form className="border-double bg-black/75 text-white h-[420px] w-[355px] ml-[600px] mt-[200px] rounded-md flex flex-col ">
  //     <h1 className="text-3xl font-bold ml-11 mt-6 mb-5">{signState}</h1>
  //     <div className="mb-3 mt-2">
  //       {signState==="Sign Up"?
  //       <input
  //         type="text"
  //         placeholder="Enter your name"
  //         name="username"
  //         value={name}
  //         className="ml-11 px-10 py-1 mt-2.5 rounded-sm text-black"
  //         onChange={(e)=>setName(e.target.value)}
  //       />:<></>}
  //     </div>
  //     {/* { emailErr && <span>password length should be 6</span>} */}
  //     <div className="mb-3">
  //       <input
  //         type="email"
  //         value={email}
  //         placeholder="Enter your Email"
  //         name="email"
  //         onChange={(e)=>setEmail(e.target.value)}
  //         className="ml-11 px-10 py-1 mt-2.5 rounded-sm  text-black"
        
  //       />
  //     </div>
  //     <div className="mb-3 relative ">
  //       {/* password input */}
  //         <input
  //           type={(open===false)? "password" : "text" }
  //           value={password}
  //           placeholder="Enter your password"
  //           name="password"
  //           onChange={HandlePassword}
  //           className="ml-11 px-10 py-1 mt-2.5 rounded-sm  text-black"
           
  //         />
  //       </div>
  //       {passwordErr && <span className="text-red-400  p-0 text-[13px] ml-10" >Password must contain Special charecters @#$</span>}    
  //       <div className="text-2xl absolute right-[-140px] top-[410px]">
  //         {/* {
  //           (open===false)? 
  //           <AiFillEyeInvisible  className="cursor-pointer" onClick={toggle}/> 
  //           :
  //           <AiFillEye  className="cursor-pointer" onClick={toggle}/>
  //         } */}
  //       </div>
  //     {/* submit button */}
  //     <div>
  //     <button
  //       type="submit"
  //       onClick={user_auth}
  //       className="bg-red-700 ml-11 px-8 py-1 rounded-sm w-[260px] mt-5 font-bold"
  //     >{signState}</button>
  //     </div>
  //     <div>
  //       <input type="checkbox" className="ml-11  mx-2 mt-2" />
  //       <span className="relative top-1.5">Remember me</span>
  //       <div className="relative left-[200px] top-[-20px] font-bold">
  //         <h1>
  //           <Link to={"https://help.netflix.com/en/node/112419"}>
  //             Need help?
  //           </Link>
  //         </h1>
  //       </div>
  //     </div>
  //     <div className="ml-11">
  //       {signState==="Sign In"? 
  //       <h2>New to Netflix?<span className="font-bold cursor-pointer" onClick={()=>setSignState("Sign Up")}> Sign Up now</span></h2>
  //       :
  //       <h2>Already have account?<span className="font-bold cursor-pointer" onClick={()=>setSignState("Sign In")} >Sign In now</span></h2> 
  //     }
  //       </div>
  //   </form>

   )
};

export default SignUpSection
