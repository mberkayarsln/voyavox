import { create } from 'zustand';

interface IsPlayingState {
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    source : string;
    setSource: (source: string) => void;
}

const useIsPlayingStore = create<IsPlayingState>((set) => ({
    isPlaying: false,
    setIsPlaying: (isPlaying) => set({ isPlaying: isPlaying }),
    source: "/voice1.mp3",
    setSource: (source) => set({ source: source }),
}));

export default useIsPlayingStore;