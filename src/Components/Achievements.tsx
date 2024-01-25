import Heading from "./other/Heading";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Achievements() {

    const achievementsArray:string[]=[
     "150+ Questions on Leetcode",
     "Mini projects : Folder Structure (Uses DFS), Calculator(Vanilla JS)",
     "Multiple Coding Contests"
    ]
  return (
    <div>
      <Heading title="Achievements" />
      <div className="flex flex-col gap-1 px-4 md:px-20 p-1 bg-white">
      {achievementsArray.map((achievement)=>(
        <span className="flex gap-2 w-full text-xs sm:text-lg items-center"><IoIosCheckmarkCircle className="text-green-400"/>{achievement}</span>
      ))}
      </div>
    </div>
  );
}
