import { ThreeCircles } from "react-loader-spinner"
const Loader=()=>{
    return(
        <div className="flex justify-center align-middle">
          render(<ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="red"
            ariaLabel="three-circles-loading"
            wrapperStyle={{mrginLeft:500, marginTop:200}}
            wrapperClass=""
           />)
        </div>
    )
}
export default Loader