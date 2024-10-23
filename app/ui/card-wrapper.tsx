import { GetMannequinTimePlaceholder } from "../lib/actions"

export default async function CardWrapper() {
  const r = await GetMannequinTimePlaceholder()
  return (
    <div className="flex flex-grow justify-center gap-10">
      <div className="primary-color card flex flex-col py-4 px-7 rounded-lg border border-purple-400 h-[200px]">
        <h3 className="font-bold mb-2 text-2xl">Football</h3>
        <p className="flex-grow">
          Description ball. We bought new field for play
        </p>
        <button className="py-2 px-4 font-black rounded bg-purple-200 text-purple-600">
          NEW!
        </button>
      </div>
      <div className="primary-color card flex flex-col py-4 px-7 rounded-lg border border-purple-400 h-[200px]">
        <h3 className="font-bold mb-2 text-2xl">Basketball</h3>
        <p className="flex-grow">
          Description ball. We bought new field for play
        </p>
        <button className="py-2 px-4 font-black rounded bg-purple-200 text-purple-600">
          NEW!
        </button>
      </div>
      <div className="primary-color card flex flex-col py-4 px-7 rounded-lg border border-purple-400 h-[200px]">
        <h3 className="font-bold mb-2 text-2xl">Swimming</h3>
        <p className="flex-grow">
          Description ball. We bought new field for play
        </p>
        <button className="py-2 px-4 font-black rounded bg-purple-200 text-purple-600">
          NEW!
        </button>
      </div>
    </div>
  )
}
