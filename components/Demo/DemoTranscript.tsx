"use client";
import useIsPlayingStore from "@/src/store/useIsPlayingStore";
import useLanguageStore from "@/src/store/useLanguageStore";
import { handleDemoStart, handleDemoStop, transcripts } from "@/src/utils/demo";
import { useEffect, useState } from "react";
import { RiArrowDownWideLine, RiPlayCircleLine, RiStopCircleLine } from "react-icons/ri";

export default function DemoTranscript({ audioRef }: { audioRef: React.RefObject<HTMLAudioElement> }) {
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

    const { isPlaying, setIsPlaying, source, setSource } = useIsPlayingStore();
    const { language } = useLanguageStore();

    const [transcript, setTranscript] = useState<{ text: string; start: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = audioRef.current?.currentTime ?? 0;

            switch (source) {
                case "/voice1.mp3":
                    setTranscript(transcripts.voice1);
                    break;
                case "/voice2.mp3":
                    setTranscript(transcripts.voice2);
                    break;
                case "/voice3.mp3":
                    setTranscript(transcripts.voice3);
                    break;
                case "/voice4.mp3":
                    setTranscript(transcripts.voice4);
                    break;
                default:
                    break;
            }

            const index = transcript.findIndex((msg, i) => {
                const nextMsg = transcript[i + 1];
                return currentTime >= msg.start && (!nextMsg || currentTime < nextMsg.start);
            });

            setCurrentIndex(index);
        }, 300);

        return () => clearInterval(interval);
    }, [audioRef, source, language, transcript]);

    useEffect(() => {
        setSource(language === "tr" ? "/voice1.mp3" : "/voice3.mp3");
    },[language])

    const visibleMessages = transcript.slice(Math.max(0, currentIndex - 3), currentIndex + 1);

    return (
        <div className="flex flex-col items-center gap-2 leading-6 h-[200px] px-12 justify-end overflow-hidden w-full">
            {visibleMessages.map((message, index) => {
                const isRecent = index >= visibleMessages.length - 2;
                return (
                    <p
                        key={index}
                        className={`font-bold text-center text-${isPlaying ? "white" : "navy"} ${isRecent ? "" : "opacity-50"
                            }`}
                    >
                        {message.text}
                    </p>
                );
            })}
            <div className="flex items-center justify-center gap-4">
                {!isPlaying ? <div className="cursor-pointer flex items-center justify-center gap-2 text-navy border-2 font-bold border-navy w-auto sm:w-40 text-center px-6 py-4 rounded-full text-lg mt-4" onClick={() => handleDemoStart(setIsPlaying)}>
                    <RiPlayCircleLine className="text-3xl" /> <span className="hidden sm:inline">{language === "tr" ? "Başlat" : "Start"}</span>
                </div> :
                    <div className="cursor-pointer flex items-center justify-center gap-2 text-white w-auto sm:w-40 text-center font-bold px-6 py-4 rounded-full text-lg bg-[linear-gradient(to_right,_rgba(43,73,103,0.3),_rgba(233,188,253,0.3))] mt-4" onClick={() => handleDemoStop(setIsPlaying)}>
                        <RiStopCircleLine className="text-3xl" /> <span className="hidden sm:inline">{language === "tr" ? "Durdur" : "Stop"}</span>
                    </div>}
                <div className="relative mt-4">
                    <select className={`appearance-none cursor-pointer bg-${isPlaying ? "white" : "transparent"} flex items-center justify-center gap-2 text-${isPlaying ? "navy" : "navy"} ${isPlaying ? "border-none" : "border-2"} font-bold border-navy w-64 text-center px-6 py-4 rounded-full text-lg`} onChange={(e) => setSource(e.target.value)} value={source} disabled={isPlaying}>
                        <option value={language === "tr" ? "/voice1.mp3" : "/voice3.mp3"}>{language === "tr" ? "Randevu Teyit" : "Appt. Confirmation"}</option>
                        <option value={language === "tr" ? "/voice2.mp3" : "/voice4.mp3"}>{language === "tr" ? "Kontrol Hatırlatma" : "Control Reminder"}</option>
                    </select>
                    <div className={`${isPlaying ? "hidden" : "block"} absolute right-4 top-1/2 -translate-y-1/2  pointer-events-none`}>
                        <RiArrowDownWideLine className="text-2xl text-navy" />
                    </div>
                </div>
            </div>
        </div>
    );
}
