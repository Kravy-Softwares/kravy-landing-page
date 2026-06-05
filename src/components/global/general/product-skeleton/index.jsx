import { Skeleton } from "@/components/ui/skeleton";

export function ProductSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
      <div className="flex flex-col gap-3">
        <Skeleton className="aspect-square w-full rounded-2xl" />
        <div className="flex gap-2.5">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="w-16 h-16 rounded-xl flex-shrink-0" />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Skeleton className="h-4 w-24 rounded" />
        <Skeleton className="h-9 w-3/4 rounded-lg" />
        <Skeleton className="h-4 w-40 rounded" />
        <Skeleton className="h-16 w-full rounded-xl" />
        <Skeleton className="h-16 w-full rounded-xl" />
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="w-8 h-8 rounded-full" />
          ))}
        </div>
        <Skeleton className="h-10 w-48 rounded-xl" />
        <div className="flex gap-3">
          <Skeleton className="h-12 flex-1 rounded-xl" />
          <Skeleton className="h-12 flex-1 rounded-xl" />
          <Skeleton className="h-12 w-12 rounded-xl" />
        </div>
        <Skeleton className="h-40 w-full rounded-xl" />
      </div>
    </div>
  );
}