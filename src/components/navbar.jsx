import { Link } from "react-router-dom";

const NavbarSection = () => {
  return (
    // <div>
    //    <h1 class="text-red-600 font-bold text-4xl cursor-pointer py-5">NETFLIX</h1>
    //    <div class="">
    //      <button class="bg-red-700 text-white cursor-pointer p-2">Singup</button>
    //      <button>SignIn</button>
    //    </div>
    // </div>
    <div >
      <nav className="flex items-center justify-between p-4  w-full absolute">
        {/* <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="hello"  width={100} height={100}/> */}
        <h1 className="text-4xl text-red-800 font-bold">NETFLIX</h1>
        <div>
        <button className=" text-xl text-white pr-4">Singin</button>
          <button className=" rounded cursor-pointer bg-red-500 text-xl text-white px-6 py-2">
           <Link to={"/singup"}>
             Singup
           </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};
export default NavbarSection;
