import { create } from 'zustand';

interface IsPlayingState {
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
}

const useIsPlayingStore = create<IsPlayingState>((set) => ({
    isPlaying: false,
    setIsPlaying: (isPlaying) => set({ isPlaying: isPlaying }),
}));

export default useIsPlayingStore;