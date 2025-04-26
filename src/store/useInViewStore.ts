import { create } from 'zustand';

interface InViewState {
    isInViewStore: boolean;
    setIsInView: (inView: boolean) => void;
}

const useInViewStore = create<InViewState>((set) => ({
    isInViewStore: false,
    setIsInView: (inView) => set({ isInViewStore: inView }),
}));

export default useInViewStore;