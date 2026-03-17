import { DetailSkeleton } from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <DetailSkeleton />
    </div>
  );
}
