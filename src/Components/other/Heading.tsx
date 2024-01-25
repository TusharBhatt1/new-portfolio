

export default function Heading({title}:{title:string}) {
  return (
    <div className="text-center font-extrabold mt-20 mb-10 ">
        <span className='text-3xl p-2'>{title}</span>
    </div>
  )
}
