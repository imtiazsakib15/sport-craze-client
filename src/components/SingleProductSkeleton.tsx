import { Skeleton } from "@/components/ui/skeleton";

const SingleProductSkeleton = () => {
  return (
    <>
      <Skeleton className="h-6 sm:h-8 lg:h-10 max-w-xs mx-auto" />
      <Skeleton className="w-full max-w-2xl mx-auto aspect-square rounded-md mt-4 sm:mt-6 lg:mt-8" />

      <Skeleton className="mt-4 max-w-60 h-6" />
      <Skeleton className="mt-4 max-w-40 h-6" />
      <Skeleton className="mt-4 max-w-40 sm:pt-3 lg:pt-4 font-semibold h-6" />

      <Skeleton className="mt-2 h-6" />
      <Skeleton className="mt-2 h-6" />
      <Skeleton className="mt-2 h-6" />
      <Skeleton className="mt-2 h-6" />
      <Skeleton className="mt-2 h-6" />

      <Skeleton className="max-w-28 h-10 mt-5 sm:mt-6 lg:mt-8" />
    </>
  );
};

export default SingleProductSkeleton;
