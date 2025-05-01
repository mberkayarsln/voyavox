"use client"

import useIsPlayingStore from "@/src/store/useIsPlayingStore";


const Hero = () => {

    const { isPlaying } = useIsPlayingStore();

    return (
        <div className={`max-w-[800px] px-12 sm:px-0 text-${isPlaying ? "white" : "navy"} flex flex-col justify-between items-center sm:gap-8 gap-4 mb-4`}>
            <h1 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl sm:max-w-[600px] lg:max-w-none leading-normal">
                Diş Hekimleri için Yapay Zeka Resepsiyonisti Voyavox
            </h1>
            <p className="text-center font-bold">
                İhtiyaç anında, sizinle!
            </p>
        </div>
    )
}

export default Hero