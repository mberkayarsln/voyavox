import Image from "next/image"
import Link from "next/link"

const navItems = [
  { label: "Keşfet", href: "/" },
  { label: "Ürün", href: "/" },
  { label: "İletişim", href: "/" },
  { label: "Ürün", href: "/" },
  { label: "Ürün", href: "/" },
]

const Header = () => {
  return (
    <header className="flex justify-between items-center px-12 py-1 rounded-[40px] bg-[url('/header_background.png')] bg-cover bg-center">
      <div className="relative h-[80px] w-[240px]">
        <Image src="/logo/VoyaVox_logo2_cropped.png" alt="logo" fill />
      </div>

      <nav className="flex items-center gap-8">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-navy font-semibold"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div>
        <Link href="/" className="text-navy rounded-[40px] border border-navy px-8 py-2 font-semibold">
          Demo
        </Link>
      </div>
    </header>
  )
}

export default Header