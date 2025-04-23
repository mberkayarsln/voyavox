import Link from "next/link";
import { RiArrowDownWideLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">

      <div className="max-w-[800px] text-navy flex flex-col justify-between items-center gap-8 mb-20">
        <h1 className="text-center font-bold text-5xl leading-[57px]">
          Diş Hekimleri için Yapay Zeka Resepsiyonisti Voyavox
        </h1>
        <p className="text-center font-bold">
          İhtiyaç anında, sizinle!
        </p>
      </div>

      <div className="flex justify-between w-[800px] ">

        <div className="px-12 py-4 rounded-[40px] border-2 border-seaGreen flex flex-col items-center">
          <Link href="/" className="text-navy font-bold text-2xl">
            Denemek için başlat
          </Link>
          <RiArrowDownWideLine size={32} className="text-navy font-bold" />
        </div>

        <div className="px-12 py-4 rounded-[40px] border-2 border-purple flex flex-col items-center">
          <Link href="/" className="text-navy font-bold text-2xl">
            Denemek için başlat
          </Link>
          <RiArrowDownWideLine size={32} className="text-navy font-bold" />
        </div>

      </div>

      <div>

      </div>
    </div>
  );
}
