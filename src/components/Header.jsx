"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className=" bg-gray-200 shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          <Image src="/images/Logo.png" width={150} height={100} alt="logo" />
        </Link>
        <div className="hidden space-x-4 md:flex flex-col md:flex-row">
          <Link
            href="/artists"
            className="text-gray-900 font-semibold hover:text-blue-600"
          >
            Artists
          </Link>
          <Link
            href="/onboarding"
            className="text-gray-900 font-semibold hover:text-blue-600"
          >
            Onboard Artist
          </Link>
          <Link
            href="/dashboard"
            className="text-gray-900 font-semibold hover:text-blue-600"
          >
            Dashboard
          </Link>
        </div>
        {isOpen ? (
          <div className="flex md:hidden" onClick={() => toggleMenu()}>
            <X />
          </div>
        ) : (
          <div className="flex md:hidden" onClick={() => toggleMenu()}>
            <Menu />
          </div>
        )}
        {isOpen && (
          <div className="overlay absolute top-[64px] left-0 w-full p-6 bg-gray-200 z-100 rounded-xl">
            <div className="flex gap-4 flex-col px-6">
              <Link
                href="/artists"
                className="text-gray-900 font-semibold hover:text-blue-600 text-xl"
                onClick={() => setIsOpen(false)}
              >
                Artists
              </Link>
              <Link
                href="/onboarding"
                className="text-gray-900 font-semibold hover:text-blue-600 text-xl"
                onClick={() => setIsOpen(false)}
              >
                Onboard Artist
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-900 font-semibold hover:text-blue-600 text-xl"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
