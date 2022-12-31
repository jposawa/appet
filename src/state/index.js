import { atom } from "recoil";
import { CONFIG } from "../utils";

export const fbAppState = atom({
  key: `${CONFIG.PREFIX}#fbApp`,
  default: null,
});

export const themeState = atom({
  key: `${CONFIG.PREFIX}#theme`,
  default: "mainTheme",
});