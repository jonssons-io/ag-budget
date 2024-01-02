import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { MessagePopup } from "../util/types/MessageTypes";

const isSystemDarkMode = () => {
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDarkMode;
};

export const darkModeAtom = atomWithStorage(
  "app.darkMode",
  false,
  {
    getItem: (key: string) => {
      const storedValue = localStorage.getItem(key);
      if (storedValue === null) {
        return isSystemDarkMode();
      }
      return JSON.parse(storedValue);
    },
    setItem: (key: string, newValue: boolean) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    removeItem: (key: string) => {
      localStorage.removeItem(key);
    },
  },
  { getOnInit: true },
);

export const messageSettingsAtom = atom<MessagePopup | null>(null);
