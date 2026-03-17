import { HiOutlineInbox } from "react-icons/hi";

interface Props {
  message?: string;
}

export default function EmptyState({
  message = "Nothing to show yet.",
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <HiOutlineInbox className="mb-4 text-6xl text-border" />
      <p className="text-lg font-medium text-secondary">{message}</p>
    </div>
  );
}
