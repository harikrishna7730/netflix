import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { UserAuth } from "../context/authContext";

const NavbarSection = () => {
  const {user, logOut}=UserAuth();
  console.log(user)

  const Navigate=useNavigate()

  const handleLogout=async()=>{
    try{
   await logOut();
   Navigate("/signin")
    }catch(err){
      console.log(err)
    }
  }
  return (
    
    <div >
      <nav className="flex items-center justify-between p-4  w-full absolute">
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" className="z-10 ml-4 mt-2" alt="hello"  width={140} height={130}/>
        {/* <h1 className="text-4xl text-red-800 font-bold z-10">NETFLIX</h1> */}
        <div>
        <button className="cursor-pointer text-xl text-white font-bold pr-4 ">Account</button>
          <button onClick={handleLogout} className=" rounded bg-red-500 text-xl text-white px-6 py-2 cursor-pointer">
           Logout
          </button>
        </div>
      </nav>
    </div>
  );
};
export default NavbarSection;


//https://github.com/harikrishna7730/netflix