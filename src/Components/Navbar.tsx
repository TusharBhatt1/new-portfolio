
import Myself from "../assets/Images/my.webp"

export default function Navbar() {
  return (
    <div className="fixed w-full z-10 bg-black text-white font-bold">
      <div className="flex justify-around items-center  p-2 shadow-lg ">
        <img className="md:h-16 md:w-16 h-12 w-12  rounded-full" src={Myself}/>
        <div className="hidden md:flex gap-7">
          <p>About</p>
          <p>Skills</p>
          <p>Project</p>
          <p>Contact</p>
        </div>
        <div>
          <a href="https://bit.ly/tusharfe" target="_blank" className="text-white bg-black p-2 px-3 rounded-lg hover:bg-blue-700">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
