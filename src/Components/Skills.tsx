import Heading from "./other/Heading";
import { allSkills } from "../../public/SkillsArray";
import SkillBox from "./other/SkillBox";

export default function Skills() {
  const skills = allSkills;
  return (
    <div>
      <div className="space-y-7">
        <Heading title="Skills" />
        <div className="flex justify-around items-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-12 justify-center items-center">
            {skills.map((skill) => (
              <SkillBox key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
        <p className="text-center">& more</p>
      </div>
    </div>
  );
}
