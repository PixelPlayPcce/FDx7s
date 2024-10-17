'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { spaceGrotesk } from "./fonts";

const NavItems = [
  { name: "Home", href: "/" },
  { name: "Places", href: "/places" },

];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
          
              <span className={cn(spaceGrotesk.className,"font-bold text-xl")}>The Goan</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-orange-300",
                    pathname === item.href ? "text-orange-300" : "text-gray-700"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search and Profile */}
        {   isScrolled&& <div className="hidden md:flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link href="/profile" className="overflow-hidden">
                <Image
                  src="/Rectangle 5.png"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            </div>}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              {NavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    pathname === item.href
                      ? "bg-orange-50 text-orange-300"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 px-3 py-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <Link href="/profile" className="overflow-hidden">
                  <Image
                    src="/Rectangle 5.png"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;