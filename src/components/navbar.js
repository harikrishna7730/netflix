import {  Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";

const NavbarSection = () => {
  const {user, logOut}=UserAuth();

  const Navigate=useNavigate()

  const handleLogout=async()=>{
    try{
   await logOut();
   Navigate("/signin")
    }catch(error){
      console.log(error)
      alert("rendered.......")
    }
  }

  const handleAccount=()=>{
    Navigate("/account")
  }
  return (
    <>
      <div className="flex items-center justify-between p-4 flex-row w-full cursor-pointer absolute z-[100]">
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" className="z-10 ml-4 mt-2" alt="hello"  width={140} height={130}/>
        <div>
        <input type="search" className="relative z-10 bg-transparent w-10 h-11 rounded-full border focus:w-full focus:border-white-300 outline-none cursor-pointer focus:cursor-text pl-12 focus:pl-16" name="search" id="search" ></input>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-30 h-12 absolute inset-y-0 my-auto px-3.5 border-r border-r-transparent peer-focus:border-white  peer-focus:stroke-white">
          <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clip-rule="evenodd" />
        </svg>

        {/* <img src="/search.png" alt="search" width={40} height={40} className="inline relative right-[50px]  "/> */}
        </div>
        <div className="">
          <button className="cursor-pointer text-white font-bold px-3 py-1 text-xl hover:text-sky-400 hover:underline" onClick={handleAccount} >Account</button>
          <button className="cursor-pointer bg-red-600  rounded text-white font-bold px-6 py-3 ml-3 text-xl"onClick={handleLogout}  >Logout</button>
        </div>
      </div>
    </>
  )
}
export default NavbarSection;




