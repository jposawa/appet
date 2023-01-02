import React from "react";
import {Routes as Switch, Route} from "react-router-dom";

import { Inicio, Pets, Perfil } from "./";

export const Rotas = () => {
  return(
    <>
      <Switch>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />

        <Route path="/pets" element={<Pets />} />
        <Route path="/perfil" element={<Perfil />} />
      </Switch>
    </>
  );
}