import { atom } from "recoil";
import { APP_PREFIX } from "../utils";

export const fbAppState = atom({
  key: `${APP_PREFIX}fbApp`,
  default: null,
});

export const themeState = atom({
  key: `${APP_PREFIX}theme`,
  default: "mainTheme",
});

export const usuarioState = atom({
  key: `${APP_PREFIX}usuario`,
  default: null,
});