"use client";

import { useEffect, useRef, useState } from "react";
import DemoTranscript from "./DemoTranscript";
import useIsPlayingStore from "@/src/store/useIsPlayingStore";
import { handleDemoStop } from "@/src/utils/demo";

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

export default function AudioVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationRef = useRef<number>();
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 300 });

  const { isPlaying, setIsPlaying, source } = useIsPlayingStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCanvasSize({ width: window.innerWidth, height: 300 });
    }
  }, []);

  useEffect(() => {
    if (!audioRef.current || !canvasRef.current) return;
    if (typeof window === "undefined") return;

    /* if (audioRef.current)
      audioRef.current.playbackRate = 2; */

    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
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
      ctx.strokeStyle = isPlaying ? "#fff" : "#2B4967";
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
      draw();
      cancelAnimationFrame(animationRef.current!);
    }

    return () => {
      cancelAnimationFrame(animationRef.current!);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isPlaying) {
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
  }, [isPlaying, setIsPlaying]);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const handleEnded = () => {
      handleDemoStop(setIsPlaying);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [setIsPlaying]);

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        className="w-screen h-[300px] px-12"
      />
      <audio ref={audioRef} src={source ? source : "/voice1.mp3"} />
      <DemoTranscript audioRef={audioRef} />
    </div>
  );
}
