"use client";
import useIsPlayingStore from "@/src/store/useIsPlayingStore";
import { handleDemoStart, handleDemoStop } from "@/src/utils/demo";
import { useEffect, useState } from "react";
import { RiPlayCircleLine, RiStopCircleLine } from "react-icons/ri";

/* const transcript = [
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
 */

const transcript = [
    { text: "Merhaba ben Voyadent yapay zeka asistanı Voya. Oylum Günay ile mi görüşüyorum?", start: 3.6 },
    { text: "Evet ben Oylum Günay.", start: 9 },
    { text: "Merhaba Oylum Hanım, 2 Mayıs 2025 tarihinde saat 09:00 ile 09:30 arasında Doktor Emirhan Maciter ile bir randevunuz bulunmakta. Bu randevunuza gelebileceğinizi teyit edebilir misiniz?", start: 12.9 },
    { text: "Maalesef gelemeyeceğim. Bir hafta sonraya alabilir miyim?", start: 26.3 },
    { text: "Tabii ki, bir hafta sonraki tarih olan 9 Mayıs 2025 için Doktor Emirhan Maciter'in müsaitlik durumuna bakacağım. Öğleden önce mi yoksa öğleden sonra mı tercih edersiniz?", start: 34 },
    { text: "Aslında sekiz Mayıs saat öğleden sonra iki gibi olursa daha iyi.", start: 45.3 },
    { text: "8 Mayıs tarihinde öğleden sonra 2'de müsaitlik bulunmuyor. Ancak öğleden sonra 3'te müsaitlik var. Bu saat sizin için uygun olur mu?", start: 55 },
    { text: "Evet olur teşekkür ederim.", start: 62.3 },
    { text: "Randevunuz 8 Mayıs 2025 tarihinde, öğleden sonra saat 3'te Doktor Emirhan Maciter ile olacak şekilde başarıyla değiştirildi. Onayladığınız için teşekkür ederiz. Sağlıklı günler dileriz.", start: 70 },
    { text: "İyi günler, teşekkürler.", start: 82.3 },
];


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
            {!isPlaying ? <div className="flex items-center justify-center gap-2 text-navy border-2 font-bold border-navy w-40 text-center px-6 py-4 rounded-full text-lg mt-4" onClick={() => handleDemoStart(setIsPlaying)}>
                <RiPlayCircleLine className="text-3xl"/> Başlat
            </div> :
                <div className="flex items-center justify-center gap-2 text-white w-40 text-center font-bold px-6 py-4 rounded-full text-lg bg-[linear-gradient(to_right,_rgba(43,73,103,0.3),_rgba(233,188,253,0.3))] mt-4" onClick={() => handleDemoStop(setIsPlaying)}>
                    <RiStopCircleLine className="text-3xl"/> Durdur
                </div>}
        </div>
    );
}
