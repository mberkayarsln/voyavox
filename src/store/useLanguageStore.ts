import {create} from 'zustand';

interface LanguageState {
    language: string;
    setLanguage: (language: string) => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
    language: 'tr',
    setLanguage: (language) => set({ language }),
}));

export default useLanguageStore;