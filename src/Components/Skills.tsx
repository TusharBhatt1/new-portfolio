import Heading from "./other/Heading";
import  { allSkills } from "../../public/SkillsArray"
import SkillBox from "./other/SkillBox";


export default function Skills() {
    const skills=allSkills
  return (
    <div>
        <div className="my-2 sm:my-12">
            <Heading title="Skills"/>
            <div className="flex justify-around ">
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 sm:gap-12 justify-center items-center">
           {skills.map((skill)=><SkillBox key={skill.name} skill={skill}/>)}
            </div>
            </div>
        </div>
    </div>
  )
}
