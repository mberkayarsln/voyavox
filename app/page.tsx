import { RiArrowDownWideLine } from "react-icons/ri";
import Link from "next/link";
import LogoSlider from "@/components/LogoSlider";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between items-center">

      <section className="h-screen flex flex-col justify-between items-center pt-44 pb-3">
        <div className="max-w-[800px] text-navy flex flex-col justify-between items-center gap-8">
          <h1 className="text-center font-bold text-5xl leading-[57px]">
            Diş Hekimleri için Yapay Zeka Resepsiyonisti Voyavox
          </h1>
          <p className="text-center font-bold">
            İhtiyaç anında, sizinle!
          </p>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div className="flex justify-between w-[800px] ">

            <Link href="#demo-1" className="px-12 py-4 rounded-[40px] border-2 border-navy flex flex-col items-center">
              <div className="text-navy font-bold text-2xl">
                Denemek için başlat
              </div>
              <RiArrowDownWideLine size={32} className="text-navy font-bold" />
            </Link>

            <Link href="/" className="px-12 py-4 rounded-[40px] border-2 border-navy flex flex-col items-center">
              <div className="text-navy font-bold text-2xl">
                Denemek için başlat
              </div>
              <RiArrowDownWideLine size={32} className="text-navy font-bold" />
            </Link>

          </div>

          <LogoSlider />
        </div>
      </section>

      <section id="demo-1">

      </section>

    </main>
  );
}
