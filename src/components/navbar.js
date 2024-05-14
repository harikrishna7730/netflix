import {  Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";

const NavbarSection = () => {
  const {user, logOut}=UserAuth();

  const Navigate=useNavigate()

  const handleLogout=async()=>{
    try{
   await logOut();
   Navigate("/signin")
   alert("logout clicked....")
    }catch(error){
      console.log(error)
      alert("rendered.......")
    }
  }
  return (
    <>
    <div>
      <nav className="flex items-center justify-between p-4  w-full absolute cursor-pointer">
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" className="z-10 ml-4 mt-2" alt="hello"  width={140} height={130}/>
        <div>
          <button className="cursor-pointer bg-red-600 rounded text-white font-bold px-3 py-1">Account</button>
          <button className="cursor-pointer bg-red-600  rounded text-white font-bold px-3 py-1 ml-3" >Logout</button>
        </div>
      </nav>
    </div>
    </>
  )
}
export default NavbarSection;
