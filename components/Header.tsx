"use client";

import useInViewStore from "@/src/store/useInViewStore";
import Image from "next/image";
import Link from "next/link";
import { RiMenuLine } from "react-icons/ri";

const navItems = [
  { label: "Keşfet", href: "/" },
  { label: "Ürün", href: "/" },
  { label: "İletişim", href: "/" },
  { label: "Ürün", href: "/" },
  { label: "Ürün", href: "/" },
];

const Header = () => {
  const { isInViewStore } = useInViewStore();

  return (
    <header className="fixed w-full lg:w-[1024px] translate-x-1/2 right-1/2 mt-3 flex justify-between items-center px-12 py-1.5 rounded-[40px] bg-transparent z-50">
      <div className="relative h-[60px] w-[180px] lg:h-[80px] lg:w-[240px] overflow-hidden">
        <Image
          src="/logo/VoyaVox_logo2_cropped.png"
          alt="Dark Logo"
          fill
          className={`transition-opacity duration-300 ${isInViewStore ? "opacity-0" : "opacity-100"}`}
        />
        <Image
          src="/logo/VoyaVox_logo_whitetext_horizontal_cropped.png"
          alt="White Logo"
          fill
          className={`absolute top-0 left-0 transition-opacity duration-300 ${isInViewStore ? "opacity-100" : "opacity-0"}`}
        />
      </div>

      <div className="lg:hidden">
        <RiMenuLine className="text-navy text-2xl" />
      </div>

      <nav className="hidden lg:flex items-center gap-8">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`text-${isInViewStore ? "white" : "navy"} font-bold transition-colors duration-300`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:block">
        <Link
          href="/"
          className={`text-${isInViewStore ? "white" : "navy"} rounded-[40px] border border-${isInViewStore ? "white" : "navy"} px-8 py-2 font-bold transition-colors duration-300`}
        >
          Demo
        </Link>
      </div>
    </header>
  );
};

export default Header;
