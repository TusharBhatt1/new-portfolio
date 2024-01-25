import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation.json"

export default function Loader() {

  return (
    <div className="h-[100vh] bg-black flex justify-center items-center">
     <Lottie className="h-80 w-80" animationData={loadingAnimation}/>
    </div>
  )
}
