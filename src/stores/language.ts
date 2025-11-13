import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LanguageState = {
  code: string;
  currency: string;
  hydrated: boolean;
  changeCountry: (code: string, currency: string) => void;
  setHydrated: (value: boolean) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      code: "US",
      currency: "USD",
      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),
      changeCountry: (code, currency) => set({ code, currency }),
    }),
    {
      name: "language",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        if (state) state.setHydrated(true);
      },
    }
  )
);
