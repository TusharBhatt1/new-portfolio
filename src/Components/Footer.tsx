import Socials from "./other/Socials";
import { FaFireAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center gap-4 p-7 bg-black text-white text-center mt-12">
      <p className="text-2xl font-bold flex justify-center items-center gap-2">Thankyou for the Visit <FaFireAlt className="text-yellow-400"/></p>
      <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
      <Socials />
      <p>&copy; {new Date().getFullYear()} Tushar Bhatt. All rights reserved.</p>
      </div>
     
    </footer>
  );
}
