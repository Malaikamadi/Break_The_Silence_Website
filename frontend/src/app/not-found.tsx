import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-7xl font-extrabold text-primary">404</h1>
      <h2 className="mb-4 text-2xl font-bold text-charcoal">Page Not Found</h2>
      <p className="mb-8 text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-white hover:bg-primary-dark"
      >
        Back to Home
      </Link>
    </div>
  );
}
