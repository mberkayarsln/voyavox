"use client";
import useIsPlayingStore from "@/src/store/useIsPlayingStore";
import { handleDemoStart, handleDemoStop } from "@/src/utils/demo";
import { useEffect, useState } from "react";

const transcript = [
    { text: "Merhaba ben Voyadent yapay zeka asistanı Voya.", start: 9 },
    { text: "Oylum Günay ile mi görüşüyorum?", start: 12 },
    { text: "Evet.", start: 14 },
    { text: "Oylum Hanım,", start: 24 },
    { text: "22 Nisan 2025 tarihinde saat 19.00 ile 20.00 arasında", start: 26 },
    { text: "Doktor Emirhan Maciter ile bir randevunuz var.", start: 31 },
    { text: "Bu randevunuza gelebileceğinizi teyit edebilir misiniz?", start: 34 },
    { text: "Evet, randevuma geleceğim.", start: 37 },
    { text: "Teşekkür ederim, Oylum Hanım.", start: 45 },
    { text: "Randevunuz onaylanmıştır.", start: 47 },
    { text: "Sağlıklı günler dileriz. İyi günler.", start: 49 },
];

/* const transcript = [
    { text: "Merhaba ben Voyadent yapay zeka asistanı Voya.", start: 1 },
    { text: "Oylum Günay ile mi görüşüyorum?", start: 2 },
    { text: "Evet.", start: 3 },
    { text: "Oylum Hanım,", start: 4 },
    { text: "22 Nisan 2025 tarihinde saat 19.00 ile 20.00 arasında", start: 5 },
    { text: "Doktor Emirhan Maciter ile bir randevunuz var.", start: 6 },
    { text: "Bu randevunuza gelebileceğinizi teyit edebilir misiniz?", start: 7 },
    { text: "Evet, randevuma geleceğim.", start: 8 },
    { text: "Teşekkür ederim, Oylum Hanım.", start: 9 },
    { text: "Randevunuz onaylanmıştır.", start: 10 },
    { text: "Sağlıklı günler dileriz. İyi günler.", start: 11 },
]; */

export default function DemoTranscript({ audioRef }: { audioRef: React.RefObject<HTMLAudioElement> }) {
    const [currentIndex, setCurrentIndex] = useState<number>(-1);

    const { isPlaying, setIsPlaying } = useIsPlayingStore();

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = audioRef.current?.currentTime ?? 0;

            const index = transcript.findIndex((msg, i) => {
                const nextMsg = transcript[i + 1];
                return currentTime >= msg.start && (!nextMsg || currentTime < nextMsg.start);
            });

            setCurrentIndex(index);
        }, 300);

        return () => clearInterval(interval);
    }, [audioRef]);

    const visibleMessages = transcript.slice(Math.max(0, currentIndex - 3), currentIndex + 1);

    return (
        <div className="flex flex-col items-center gap-2 leading-6 h-[180px] justify-end overflow-hidden w-full">
            {visibleMessages.map((message, index) => {
                const isRecent = index >= visibleMessages.length - 2;
                return (
                    <p
                        key={index}
                        className={`font-bold text-${isPlaying ? "white" : "navy"} ${isRecent ? "" : "opacity-50"
                            }`}
                    >
                        {message.text}
                    </p>
                );
            })}
            {!isPlaying ? <div className="text-navy border border-navy w-40 text-center px-6 py-4 rounded-full text-lg mt-4" onClick={() => handleDemoStart(setIsPlaying)}>
                Başlat
            </div> :
                <div className="text-white w-40 text-center px-6 py-4 rounded-full text-lg bg-[linear-gradient(to_right,_rgba(43,73,103,0.3),_rgba(233,188,253,0.3))] mt-4" onClick={() => handleDemoStop(setIsPlaying)}>
                    Durdur
                </div>}
        </div>
    );
}
