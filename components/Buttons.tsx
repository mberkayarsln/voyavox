"use client"
import useInViewStore from "@/src/store/useInViewStore";
import Link from "next/link"
import { RiArrowDownWideLine } from "react-icons/ri"

const Buttons = () => {

    const { isInViewStore } = useInViewStore();

    return (
        <div className="flex justify-between w-[800px] ">
            <Link href="#demo" className={`px-12 py-4 rounded-[40px] border-2 border-${isInViewStore ? "white" : "navy"} flex flex-col items-center`}>
                <div className={`text-${isInViewStore ? "white" : "navy"} font-bold text-2xl`}>
                    Denemek için başlat
                </div>
                <RiArrowDownWideLine size={32} className={`text-${isInViewStore ? "white" : "navy"} font-bold`} />
            </Link>

            <Link href="/" className={`px-12 py-4 rounded-[40px] border-2 border-${isInViewStore ? "white" : "navy"} flex flex-col items-center`}>
                <div className={`text-${isInViewStore ? "white" : "navy"} font-bold text-2xl`}>
                    Denemek için başlat
                </div>
                <RiArrowDownWideLine size={32} className={`text-${isInViewStore ? "white" : "navy"} font-bold`} />
            </Link>

        </div>
    )
}

export default Buttons