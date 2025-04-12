import { SkillsType } from "@public/SkillsArray";

export default function SkillBox({ skill }: { skill: SkillsType }) {
  const { name, icon, color } = skill;
  return (
    <div className="hover:bg-slate-800 bg-slate-700 cursor-pointer border border-black text-sm sm:text-md p-4 sm:p-12 flex flex-col justify-center items-center h-20 w-20 rounded-xl">
      <span
         className={`text-${color} text-xl sm:text-3xl p-2 rounded-full`}
      >
        {icon}
      </span>
      <p className="mt-2">{name}</p>
    </div>
  );
}
