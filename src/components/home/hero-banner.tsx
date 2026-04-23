import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative w-full">
      {/* Hero image */}
      <div className="relative aspect-[3/4] md:aspect-[16/9] w-full overflow-hidden">
        <Image
          src="/images/hero/hero-banner.jpg"
          alt="Spring / Summer Collection"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center text-white">
          <p className="text-xs tracking-[0.3em] uppercase mb-2">
            Limited Sale
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            SPRING /
            <br />
            SUMMER 2025
          </h1>
          <p className="mt-3 text-sm text-gray-200 max-w-xs">
            All the Spring 2025 Ready-to-Wear fashion show coverage in one
            place.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex gap-3">
            <Link
              href="/collections/accessories"
              className="border border-white px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
            >
              Shop Accessories
            </Link>
            <Link
              href="/collections/clothing"
              className="border border-white bg-white text-black px-6 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-transparent hover:text-white transition-colors"
            >
              Shop Clothing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
