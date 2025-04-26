"use client"

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import AudioVisualizer from "./AudioVisualizer";
import useInViewStore from "@/src/store/useInViewStore";

const Demo = () => {

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);

    const { setIsInView } = useInViewStore();

    useEffect(() => {
        const body = document.querySelector("body");
        if (isInView) {
            if (body)
                body.style.backgroundColor = "black";
        }
        else
            if (body)
                body.style.backgroundColor = "transparent";

        setIsInView(isInView);
    }, [isInView, setIsInView])

    return (
        <section className="h-screen w-full flex flex-col justify-end items-center mt-3 pb-12" id="demo" ref={ref}>
            <AudioVisualizer isInView={isInView} />
        </section>
    )
}

export default Demo