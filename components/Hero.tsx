"use client"

import useIsPlayingStore from "@/src/store/useIsPlayingStore";
import useLanguageStore from "@/src/store/useLanguageStore";


const Hero = () => {

    const { isPlaying } = useIsPlayingStore();
    const { language } = useLanguageStore();

    return (
        <div className={`max-w-[800px] px-12 sm:px-0 text-${isPlaying ? "white" : "navy"} flex flex-col justify-between items-center sm:gap-8 gap-4 mb-4`}>
            <h1 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl sm:max-w-[600px] lg:max-w-none leading-normal">
                {language === "tr" ? "Diş Hekimleri için Yapay Zeka Resepsiyonisti Voyavox" : "AI Receptionist for Dentists, Voyavox"}
            </h1>
            <p className="text-center font-bold">
                {language === "tr" ? "İhtiyaç anında, sizinle!" : "At your service when you need it!"}
            </p>
        </div>
    )
}

export default Hero