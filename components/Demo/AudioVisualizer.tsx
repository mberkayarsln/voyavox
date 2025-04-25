"use client";

import { useEffect, useRef, useState } from "react";
import DemoTranscript from "./DemoTranscript";

export default function AudioVisualizer({ isInView }: { isInView: boolean }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const animationRef = useRef<number>();
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!audioRef.current || !canvasRef.current) return;

        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }

        if (!sourceRef.current) {
            sourceRef.current = audioCtxRef.current.createMediaElementSource(audioRef.current);
        }

        if (!analyserRef.current) {
            analyserRef.current = audioCtxRef.current.createAnalyser();
            analyserRef.current.fftSize = 2048;
            sourceRef.current.connect(analyserRef.current);
            analyserRef.current.connect(audioCtxRef.current.destination);
        }

        const analyser = analyserRef.current;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d")!;
        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;

        function draw() {
            animationRef.current = requestAnimationFrame(draw);

            analyser.getByteTimeDomainData(dataArray);

            ctx.clearRect(0, 0, WIDTH, HEIGHT);

            ctx.lineWidth = 2;
            ctx.strokeStyle = "white";
            ctx.beginPath();

            const sliceWidth = WIDTH / bufferLength;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                const v = dataArray[i] / 128.0;
                const y = (v * HEIGHT) / 2;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
                x += sliceWidth;
            }

            ctx.lineTo(WIDTH, HEIGHT / 2);
            ctx.stroke();
        }

        if (isPlaying) {
            draw();
        } else {
            cancelAnimationFrame(animationRef.current!);
        }

        return () => {
            cancelAnimationFrame(animationRef.current!);
        };
    }, [isPlaying]);

    const togglePlay = async () => {
        if (!audioRef.current || !audioCtxRef.current) return;

        if (audioCtxRef.current.state === "suspended") {
            await audioCtxRef.current.resume();
        }

        if (audioRef.current.paused) {
            await audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        if (isInView) {
            if (audioRef.current && audioCtxRef.current) {
                audioCtxRef.current.resume();
                audioRef.current.play();
                setIsPlaying(true);
            }
        } else {
            if (audioRef.current && audioCtxRef.current) {
                audioCtxRef.current.suspend();
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    }, [isInView]);

    return (
        <div className="flex flex-col items-center justify-center w-full overflow-x-hidden">
            <canvas ref={canvasRef} width={window.innerWidth} height={300} className="w-screen h-[300px]"></canvas>
            <audio ref={audioRef} src="/voice.mp3" />

            <DemoTranscript audioRef={audioRef} />
        </div >
    );
}
