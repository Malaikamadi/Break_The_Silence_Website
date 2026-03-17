import { DetailSkeleton } from "@/components/ui/Skeleton";

export default function ProjectLoading() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
      <DetailSkeleton />
    </div>
  );
}
