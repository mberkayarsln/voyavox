import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LanguageState {
    language: string;
    setLanguage: (language: string) => void;
}

const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            language: "tr",
            setLanguage: (language) => set({ language }),
        }),
        {
            name: "lang"
        }
    )
);

export default useLanguageStore;