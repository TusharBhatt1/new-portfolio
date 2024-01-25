import { IoLocationSharp } from "react-icons/io5";
import { FaBookReader } from "react-icons/fa";
import Lottie from 'lottie-react';
import animationData from "../assets/Animation - 1706195875014.json"
import Socials from './other/Socials';
import { FaUserSecret } from "react-icons/fa";



export default function Banner() {
 
  return (
    <div className="h-[92vh] h-full bg-white flex flex-col md:mt-2 md:flex-row justify-around items-center tracking-wide p-4">
      <div className="flex flex-col gap-14 md:gap-20 mt-20">
        <div>
         <FaUserSecret size={32} className="text-blue-700 mb-2 md:hidden"/>
          <h1 className="text-2xl sm:text-3xl">
            Greetings! <br className="md:hidden"/> I'm <span className="font-extrabold">Tushar Bhatt.</span>{" "}
          </h1>
          <br />
          <p className="sm:text-lg">A Front End Specialist , Full Stack Engineer.</p>
          <br />
          <p className="text-slate-500 text-sm">
            I transform thoughts into <br/> functional features with logic,
            <br/>
            <br/>
            and convert Figma designs <br/> into responsive webpages.
          </p>
        </div>
        <div className='flex justify-between items-center  text-center  font-bold text-xs sm:text-sm mt-7'>
        <span className='flex items-center gap-2'><FaBookReader/> MCA (2022-24)</span>
        <span className='flex items-center gap-2'><IoLocationSharp/> Dehradun, Uttarakhand, India </span>
      </div>

       <Socials/>
      </div>
      <div>
        <Lottie height={40} animationData={animationData}/>
      </div>
    </div>
  );
}
