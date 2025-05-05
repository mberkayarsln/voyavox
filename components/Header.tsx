"use client";

import useIsPlayingStore from "@/src/store/useIsPlayingStore";
import Image from "next/image";
import Link from "next/link";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import useLanguageStore from "@/src/store/useLanguageStore";

const navItems = [
  { label: "Keşfet", href: "/" },
  { label: "Ürün", href: "#demo" },
  { label: "İletişim", href: "mailto:info@voyavox.com" },
  { label: "Demo Talep", href: "https://docs.google.com/forms/d/e/1FAIpQLSfonAa1IxWoqlHxcwv5iAjv9ommE4KY9TyPXV1fyElFLWMRFQ/viewform?usp=header" }
];

const navItemsEn = [
  { label: "Explore", href: "/" },
  { label: "Product", href: "#demo" },
  { label: "Contact", href: "mailto:info@voyavox.com" },
  { label: "Request Demo", href: "https://docs.google.com/forms/d/e/1FAIpQLSfonAa1IxWoqlHxcwv5iAjv9ommE4KY9TyPXV1fyElFLWMRFQ/viewform?usp=header" }
]

const Header = () => {
  const { isPlaying } = useIsPlayingStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const { language, setLanguage } = useLanguageStore();

  return (
    <header className={`fixed w-full lg:w-[1024px] translate-x-1/2 right-1/2 flex justify-between items-center px-6 sm:px-12 py-5 rounded-[40px] bg-transparent z-50`}>

      <Link href="/" className="relative h-[60px] w-[180px] lg:h-[70px] lg:w-[220px] overflow-hidden">
        <Image
          src="/logo/VoyaVox_logo2_cropped.png"
          alt="Dark Logo"
          fill
          className={`transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}
        />
        <Image
          src="/logo/VoyaVox_logo_whitetext_horizontal_cropped.png"
          alt="White Logo"
          fill
          className={`absolute top-0 left-0 transition-opacity duration-300 ${isPlaying ? "opacity-100" : "opacity-0"}`}
        />
      </Link>

      <div className="lg:hidden z-50">
        {menuOpen ? (
          <RiCloseLine className="text-white text-3xl" onClick={toggleMenu} />
        ) : (
          <RiMenuLine className="text-navy text-3xl" onClick={toggleMenu} />
        )}
      </div>

      <nav className="hidden lg:flex items-center gap-8">
        {(language === "tr" ? navItems : navItemsEn).map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`font-bold transition-colors duration-300 ${isPlaying ? "text-white" : "text-navy"}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden lg:block">
        <button
          onClick={() => {
            const newLang = language === "tr" ? "en" : "tr";
            setLanguage(newLang);
          }}
          className={`rounded-[40px] border px-8 py-2 font-bold transition-colors duration-300 ${isPlaying ? "text-white border-white" : "text-navy border-navy"}`}
        >
          {language === "tr" ? "EN" : "TR"}
        </button>
      </div>


      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute inset-0 w-screen h-screen bg-gradient-to-br from-white to-navy opacity-100 z-40 transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">

          <Image
            src="/logo/VoyaVox_logo_whitetext_horizontal_cropped.png"
            alt="White Logo"
            width={180}
            height={60}
            className="mb-4"
          />

          {(language === "tr" ? navItems : navItemsEn).map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={toggleMenu}
              className="text-white text-xl font-semibold"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              const newLang = language === "tr" ? "en" : "tr";
              setLanguage(newLang);
              toggleMenu();
            }}
            className="text-white font-bold border border-white rounded-full px-6 py-2 mt-4"
          >
            {language === "tr" ? "EN" : "TR"}
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
