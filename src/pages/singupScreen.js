import { Link } from "react-router-dom"
import NavbarSection from "../components/navbar"
import SignUpSection from "../components/signup"



const SignUpScreen=()=>{
    return(
        <>
        {/* <NavbarSection/> */}
        <Link to={"/"}>
          <img
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            className="z-10 ml-4 mt-2 md:w-[140px] md:text-center absolute"
            alt="TMDB"
            width={140}
            height={130}
          />
        </Link>
        <SignUpSection/>
        </>
    )
}
export default SignUpScreen