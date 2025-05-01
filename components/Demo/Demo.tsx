"use client"

import AudioVisualizer from "./AudioVisualizer";

const Demo = () => {

    /* const ref = useRef<HTMLDivElement>(null);
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
    }, [isInView, setIsInView]) */

    return (
        <section className="h-screen w-full flex flex-col justify-end items-center mt-3 pb-12" id="demo1">
            <AudioVisualizer />
        </section>
    )
}

export default Demo