"use client"
import useIsPlayingStore from "@/src/store/useIsPlayingStore"
import useLanguageStore from "@/src/store/useLanguageStore"
import { handleDemoStart } from "@/src/utils/demo"
import Link from "next/link"
import { RiArrowDownWideLine, RiArrowRightWideLine } from "react-icons/ri"

const Buttons = () => {

    const { isPlaying, setIsPlaying, setSource } = useIsPlayingStore();
    const { language } = useLanguageStore();

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between w-full max-w-[800px] px-6 md:px-0">
            <Link href="#demo" onClick={() => { handleDemoStart(setIsPlaying); setSource("/voice1.mp3"); }} className={`w-[300px] sm:w-auto px-5 md:px-12 py-3 md:py-4 whitespace-nowrap rounded-[40px] border-2 border-${isPlaying ? "white" : "navy"} flex flex-row-reverse justify-center gap-4 sm:gap-0 sm:flex-col items-center`}>
                <div className={`text-${isPlaying ? "white" : "navy"} font-bold text-lg sm:text-xl lg:text-2xl text-center`}>
                    {language === "tr" ? "Diş Hatırlatma Tanıtımı" : "Dental Reminder Demo"}
                </div>
                <RiArrowDownWideLine size={32} className={`text-${isPlaying ? "white" : "navy"} font-bold hidden sm:block`} />
                <RiArrowRightWideLine size={32} className={`text-${isPlaying ? "white" : "navy"} font-bold sm:hidden`} />
            </Link>

            <Link href="#demo" onClick={() => { handleDemoStart(setIsPlaying); setSource("/voice2.mp3") }} className={`w-[300px] sm:w-auto px-5 md:px-12 py-3 md:py-4 whitespace-nowrap rounded-[40px] border-2 border-${isPlaying ? "white" : "navy"} flex flex-row-reverse justify-center gap-4 sm:gap-0 sm:flex-col items-center`}>
                <div className={`text-${isPlaying ? "white" : "navy"} font-bold text-lg sm:text-xl lg:text-2xl text-center`}>
                    {language === "tr" ? "Randevu Alma Tanıtımı" : "Appointment Demo"}
                </div>
                <RiArrowDownWideLine size={32} className={`text-${isPlaying ? "white" : "navy"} font-bold hidden sm:block`} />
                <RiArrowRightWideLine size={32} className={`text-${isPlaying ? "white" : "navy"} font-bold sm:hidden`} />
            </Link>

        </div>
    )
}

export default Buttons