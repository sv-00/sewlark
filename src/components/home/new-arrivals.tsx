import Image from "next/image";
import Link from "next/link";

const TABS = ["Tops", "Bottoms", "Accessories"] as const;

// Placeholder products — will be replaced with DB data
const PRODUCTS = [
  {
    id: "1",
    name: "Zenith Full Sleeve",
    slug: "zenith-full-sleeve",
    price: 105,
    compareAt: 145,
    image: "/images/products/product-1.jpg",
    badge: "Trending",
    colors: 5,
  },
  {
    id: "2",
    name: "Dala White Tshirt",
    slug: "dala-white-tshirt",
    price: 105,
    compareAt: 165,
    image: "/images/products/product-2.jpg",
    badge: "Trending",
    colors: 5,
  },
  {
    id: "3",
    name: "Classic Stripe Tee",
    slug: "classic-stripe-tee",
    price: 89,
    compareAt: null,
    image: "/images/products/product-3.jpg",
    badge: "Trending",
    colors: 3,
  },
  {
    id: "4",
    name: "Relaxed Denim Set",
    slug: "relaxed-denim-set",
    price: 195,
    compareAt: null,
    image: "/images/products/product-4.jpg",
    badge: "Trending",
    colors: 2,
  },
];

export function NewArrivals() {
  return (
    <section className="px-4 py-10">
      {/* Section header */}
      <h2 className="text-2xl font-semibold tracking-tight">NEW ARRIVALS</h2>
      <p className="mt-1 text-sm text-gray-500">
        Discover the latest ready-to-wear dresses.
      </p>

      {/* Tabs */}
      <div className="mt-5 flex items-center gap-6 border-b border-gray-200 text-sm">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            type="button"
            className={`pb-2 uppercase tracking-wider ${
              i === 0
                ? "border-b-2 border-black font-semibold"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
        <Link
          href="/collections/new-arrivals"
          className="ml-auto text-xs underline"
        >
          View More
        </Link>
      </div>

      {/* Product grid */}
      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {PRODUCTS.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group"
          >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {product.badge && (
                <span className="absolute top-2 left-2 bg-black text-white text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="mt-2">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                Sewlark
              </p>
              <h3 className="text-sm font-medium">{product.name}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                {product.compareAt && (
                  <span className="text-xs text-gray-400 line-through">
                    ₹{product.compareAt}
                  </span>
                )}
                <span className="text-sm font-semibold">₹{product.price}</span>
              </div>

              {/* Color dots */}
              <div className="mt-1.5 flex items-center gap-1">
                <span className="h-3 w-3 rounded-full bg-red-800 border border-gray-200" />
                <span className="h-3 w-3 rounded-full bg-blue-900 border border-gray-200" />
                <span className="h-3 w-3 rounded-full bg-orange-300 border border-gray-200" />
                {product.colors > 3 && (
                  <span className="text-[10px] text-gray-400">
                    +{product.colors - 3} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
