import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { fbAppState, themeState, usuarioState } from "./state";
import { initializeApp } from "firebase/app";
import { CONFIG, pegaLocalStorage } from "./utils";
import { Menu } from "./componentes";
import { Rotas } from "./paginas";

import './App.scss'

export default function App() {
  const [fbApp, salvaFbApp] = useRecoilState(fbAppState);
  const theme = useRecoilValue(themeState);
  const salvaDadosUsuario = useSetRecoilState(usuarioState);

  React.useEffect(() => {
    if (!fbApp) {
      salvaFbApp(initializeApp(CONFIG.FB_CONFIG));
    }

    const dadosUsuario = pegaLocalStorage("usuario", true);

    salvaDadosUsuario(dadosUsuario);
  }, []);

  return (
    <main className={`themes ${theme}`}>
      <section>
        <Rotas />
      </section>
      <Menu />
    </main>
  )
}