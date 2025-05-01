"use client"

import useInViewStore from "@/src/store/useInViewStore";


const Hero = () => {

    const { isInViewStore } = useInViewStore();

    return (
        <div className={`max-w-[800px] text-${isInViewStore ? "white" : "navy"} flex flex-col justify-between items-center gap-8`}>
            <h1 className="text-center font-bold text-3xl lg:text-5xl leading-[57px]">
                Diş Hekimleri için Yapay Zeka <br/> Resepsiyonisti Voyavox
            </h1>
            <p className="text-center font-bold">
                İhtiyaç anında, sizinle!
            </p>
        </div>
    )
}

export default Hero