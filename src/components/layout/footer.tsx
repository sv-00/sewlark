import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold tracking-[0.2em] uppercase">
              Sewlark
            </h3>
            <p className="mt-3 text-sm text-gray-400">
              Discover the latest ready-to-wear fashion.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Shop
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/collections/new-arrivals" className="hover:text-white">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections/tops" className="hover:text-white">
                  Tops
                </Link>
              </li>
              <li>
                <Link href="/collections/bottoms" className="hover:text-white">
                  Bottoms
                </Link>
              </li>
              <li>
                <Link href="/collections/accessories" className="hover:text-white">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Help
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Legal
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Sewlark. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
