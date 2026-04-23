import Link from "next/link";
import { Menu, Search, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Mobile menu */}
        <button type="button" aria-label="Open menu" className="lg:hidden">
          <Menu className="h-6 w-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-[0.2em] uppercase">
          Sewlark
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button type="button" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <Link href="/cart" aria-label="Shopping bag">
            <ShoppingBag className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center justify-center gap-8 border-t border-gray-100 py-3 text-sm uppercase tracking-wider">
        <Link href="/collections/new-arrivals" className="hover:text-gray-600">
          New Arrivals
        </Link>
        <Link href="/collections/tops" className="hover:text-gray-600">
          Tops
        </Link>
        <Link href="/collections/bottoms" className="hover:text-gray-600">
          Bottoms
        </Link>
        <Link href="/collections/accessories" className="hover:text-gray-600">
          Accessories
        </Link>
        <Link href="/collections/sale" className="hover:text-gray-600 text-red-600">
          Sale
        </Link>
      </nav>
    </header>
  );
}
