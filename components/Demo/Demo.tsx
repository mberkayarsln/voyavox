"use client"

import { useInView } from "motion/react";
import { useEffect, useRef } from "react";
import AudioVisualizer from "./AudioVisualizer";

const Demo = () => {

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref);

    useEffect(() => {
        const body = document.querySelector("body");
        if (isInView) {
            if (body)
                body.style.backgroundColor = "black";
        }
        else
            if (body)
                body.style.backgroundColor = "transparent";
    }, [isInView])



    return (
        <section className="h-screen w-full flex flex-col justify-end items-center mt-3 pb-12" id="demo" ref={ref}>
            <AudioVisualizer isInView={isInView} />
        </section>
    )
}

export default Demo