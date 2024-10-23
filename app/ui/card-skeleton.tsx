export default function CardSkeleton() {
  return (
    <div className="primary-color w-full card flex flex-col py-4 px-7 rounded-lg border border-purple-400 h-[200px]">
      <h3 className="font-bold mb-2 rounded-md w-[75px] h-[1em] bg-slate-700 text-2xl"></h3>
      <p className="flex-grow h-[1em] w-[150px] rounded-md">
      </p>
      <button className="py-2 px-4 font-black rounded h-[1em] bg-slate-800">
      </button>
    </div>
  )
}
