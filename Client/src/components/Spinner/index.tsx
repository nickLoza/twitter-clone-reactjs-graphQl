import { ClipLoader } from "react-spinners";

const loaderStyle = {
	    display: "flex",
	    justifyContent: "center",
	    alignItems: "center",
	    margin: "3rem auto"
  	};


function Spinner() {
	return (
		<ClipLoader color="#1D9BF0" size={25} cssOverride={loaderStyle}/>
	)
}

export default Spinner