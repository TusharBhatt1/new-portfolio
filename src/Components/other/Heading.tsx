export default function Heading({
  title,
  alignment = "center",
}: {
  title: string;
  alignment?: "center" | "left";
}) {
  return (
    <div className={`text-${alignment} font-extrabold mt-20 mb-10 `}>
      <span className="text-3xl">{title}</span>
    </div>
  );
}
