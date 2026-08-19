import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center section-padding-x">
      <div className="text-center">
        <p className="text-label mb-4 opacity-50">404</p>
        <h1 className="text-display mb-6">Page not found</h1>
        <p className="text-[var(--color-muted)] mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="text-sm tracking-wide uppercase link-underline opacity-80 hover:opacity-100"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
