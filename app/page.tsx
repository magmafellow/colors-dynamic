import { Suspense } from 'react'
import CardWrapper from './ui/card-wrapper'
import GetColors from './ui/get-colors'
import CardWrapperSkeleton from './ui/card-wrapper-skeleton'

export default function Page() {
  return (
    <div className="container flex flex-col min-h-screen mx-auto pt-8 pb-8">
      {/* initialize client side color change */}
      <GetColors />

      <div className="flex justify-between items-center mb-8">
        <div className="rounded-full h-20 w-20 bg-red-300"></div>
        <button className="primary-color py-3 px-5 rounded text-purple-500 font-bold">
          Call us!
        </button>
      </div>
      <Suspense fallback={<CardWrapperSkeleton />}>
        <CardWrapper />
      </Suspense>

      <div className="footer h-[100px] flex items-center justify-between">
        <h2 className="primary-color text-purple-300 py-1 px-1.5 rounded">Company</h2>
        <h6 className="primary-color text-purple-300 py-1 px-1.5 rounded">Designed.</h6>
      </div>
    </div>
  )
}
