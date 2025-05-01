"use client"
import useInViewStore from "@/src/store/useInViewStore";
import Link from "next/link"
import { RiArrowDownWideLine } from "react-icons/ri"

const Buttons = () => {

    const { isInViewStore } = useInViewStore();

    return (
        <div className="flex flex-col sm:flex-row justify-between w-full max-w-[800px]">
            <Link href="#demo" className={`px-5 md:px-12 py-4 rounded-[40px] border-2 border-${isInViewStore ? "white" : "navy"} flex flex-col items-center`}>
                <div className={`text-${isInViewStore ? "white" : "navy"} font-bold text-xl lg:text-2xl text-center`}>
                    Diş Hatırlatma Tanıtımı
                </div>
                <RiArrowDownWideLine size={32} className={`text-${isInViewStore ? "white" : "navy"} font-bold`} />
            </Link>

            <Link href="/" className={`px-5 md:px-12 py-4 rounded-[40px] border-2 border-${isInViewStore ? "white" : "navy"} flex flex-col items-center`}>
                <div className={`text-${isInViewStore ? "white" : "navy"} font-bold text-xl lg:text-2xl text-center`}>
                    Randevu Alma Tanıtımı
                </div>
                <RiArrowDownWideLine size={32} className={`text-${isInViewStore ? "white" : "navy"} font-bold`} />
            </Link>

        </div>
    )
}

export default Buttons