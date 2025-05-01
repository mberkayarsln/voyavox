export const handleDemoStart = (setIsPlaying: (arg0: boolean) => void) => {

    setIsPlaying(true);
    const body = document.querySelector("body");
    if (body)
        body.style.backgroundColor = "black";
}

export const handleDemoStop = (setIsPlaying: (arg0: boolean) => void) => {

    setIsPlaying(false);
    const body = document.querySelector("body");
    if (body)
        body.style.backgroundColor = "transparent";
}