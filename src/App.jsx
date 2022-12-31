import React from "react";
import { useRecoilState, useRecoilValue } from 'recoil'
import { fbAppState, themeState } from "./state";
import { initializeApp } from "firebase/app";
import { CONFIG } from "./utils";
import { Menu } from "./componentes";

import './App.scss'

export default function App() {
  const [fbApp, setFbApp] = useRecoilState(fbAppState);
  const theme = useRecoilValue(themeState);

  React.useEffect(() => {
    if (!fbApp) {
      setFbApp(initializeApp(CONFIG.FB_CONFIG));
    }
  }, []);

  return (
    <main className={`themes ${theme}`}>
      <div></div>
      <Menu />
    </main>
  )
}