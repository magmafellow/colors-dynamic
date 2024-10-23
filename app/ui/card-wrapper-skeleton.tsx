import CardSkeleton from "./card-skeleton"

export default async function CardWrapperSkeleton() {
  return (
    <div className="flex flex-grow justify-center gap-10">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  )
}
