export default function Heading({
  title,
  alignment = "center",
}: {
  title: string;
  alignment?: "center" | "left";
}) {
  return (
    <p className={`text-${alignment} text-2xl font-extrabold mt-20 mb-10 `}>
     {title}
    </p>
  );
}
