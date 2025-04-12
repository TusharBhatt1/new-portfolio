
import Socials from "./other/Socials";

export default function Navbar() {
  return (
    <div className="fixed w-full flex md:flex-row flex-col justify-between items-center p-4 border-b border-slate-800 z-10 bg-black font-bold">
      <h1 className="sm:block hidden">Hey 👋 I'm Tushar Bhatt  , <span className="text-sm">Full Stack Front End Engineer with ~ an year of experience</span></h1>
      <Socials/>
    </div>
  );
}
