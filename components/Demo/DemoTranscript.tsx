"use client";
import useIsPlayingStore from "@/src/store/useIsPlayingStore";
import useLanguageStore from "@/src/store/useLanguageStore";
import { handleDemoStart, handleDemoStop, transcripts } from "@/src/utils/demo";
import { useEffect, useState } from "react";
import { RiPlayCircleLine, RiStopCircleLine } from "react-icons/ri";

export default function DemoTranscript({ audioRef }: { audioRef: React.RefObject<HTMLAudioElement> }) {
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

    const { isPlaying, setIsPlaying, source } = useIsPlayingStore();
    const { language } = useLanguageStore();

    const [transcript, setTranscript] = useState<{ text: string; start: number }[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = audioRef.current?.currentTime ?? 0;

            if (language === "tr") {
                if (source === "/voice1.mp3") {
                    setTranscript(transcripts.voice1.tr);
                }
                else
                    setTranscript(transcripts.voice2.tr);
            }
            else {
                if (source === "/voice1.mp3")
                    setTranscript(transcripts.voice1.en);
                else
                    setTranscript(transcripts.voice2.en);
            }

            const index = transcript.findIndex((msg, i) => {
                const nextMsg = transcript[i + 1];
                return currentTime >= msg.start && (!nextMsg || currentTime < nextMsg.start);
            });

            setCurrentIndex(index);
        }, 300);

        return () => clearInterval(interval);
    }, [audioRef, source, language, transcript]);

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
            {!isPlaying ? <div className="cursor-pointer flex items-center justify-center gap-2 text-navy border-2 font-bold border-navy w-40 text-center px-6 py-4 rounded-full text-lg mt-4" onClick={() => handleDemoStart(setIsPlaying)}>
                <RiPlayCircleLine className="text-3xl" /> {language === "tr" ? "Başlat" : "Start"}
            </div> :
                <div className="cursor-pointer flex items-center justify-center gap-2 text-white w-40 text-center font-bold px-6 py-4 rounded-full text-lg bg-[linear-gradient(to_right,_rgba(43,73,103,0.3),_rgba(233,188,253,0.3))] mt-4" onClick={() => handleDemoStop(setIsPlaying)}>
                    <RiStopCircleLine className="text-3xl" /> {language === "tr" ? "Durdur" : "Stop"}
                </div>}
        </div>
    );
}
