import { create } from "zustand";

type mobileNavType = {
  isAsideOpen: boolean;
  toggleAsideOpen: () => void;
  closeAside: () => void;
};

export const useMobileAsideStore = create<mobileNavType>((set) => ({
  isAsideOpen: false,
  toggleAsideOpen: () => set((state) => ({ isAsideOpen: !state.isAsideOpen })),
  closeAside: () => set({ isAsideOpen: false })
}));