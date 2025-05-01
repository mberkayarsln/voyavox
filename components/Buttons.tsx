"use client"
import useInViewStore from "@/src/store/useInViewStore";
import Link from "next/link"
import { RiArrowDownWideLine,RiArrowRightWideLine } from "react-icons/ri"

const Buttons = () => {

    const { isInViewStore } = useInViewStore();

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between w-full max-w-[800px]">
            <Link href="#demo" className={`w-[300px] sm:w-auto px-5 md:px-12 py-3 md:py-4 whitespace-nowrap rounded-[40px] border-2 border-${isInViewStore ? "white" : "navy"} flex flex-row-reverse justify-center gap-4 sm:gap-0 sm:flex-col items-center`}>
                <div className={`text-${isInViewStore ? "white" : "navy"} font-bold text-lg sm:text-xl lg:text-2xl text-center`}>
                    Diş Hatırlatma Tanıtımı
                </div>
                <RiArrowDownWideLine size={32} className={`text-${isInViewStore ? "white" : "navy"} font-bold hidden sm:block`} />
                <RiArrowRightWideLine size={32} className={`text-${isInViewStore ? "white" : "navy"} font-bold sm:hidden`} />
            </Link>

            <Link href="/" className={`w-[300px] sm:w-auto px-5 md:px-12 py-3 md:py-4 whitespace-nowrap rounded-[40px] border-2 border-${isInViewStore ? "white" : "navy"} flex flex-row-reverse justify-center gap-4 sm:gap-0 sm:flex-col items-center`}>
                <div className={`text-${isInViewStore ? "white" : "navy"} font-bold text-lg sm:text-xl lg:text-2xl text-center`}>
                    Randevu Alma Tanıtımı
                </div>
                <RiArrowDownWideLine size={32} className={`text-${isInViewStore ? "white" : "navy"} font-bold hidden sm:block`} />
                <RiArrowRightWideLine size={32} className={`text-${isInViewStore ? "white" : "navy"} font-bold sm:hidden`} />
            </Link>

        </div>
    )
}

export default Buttons