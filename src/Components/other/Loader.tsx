import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation.json";
import { useEffect, useState } from "react";

export default function Loader() {
  const [count, setCount] = useState(6);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[100vh] bg-black text-white flex justify-center items-center">
      <Lottie className="h-80 w-80" animationData={loadingAnimation} />
      <p className="bg-slate-800 p-2 rounded-full">Taking you there in <span>{count}</span></p>
    </div>
  );
}
