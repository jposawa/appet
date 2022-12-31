import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";

import styles from "./Menu.module.scss";

export const Menu = (props) => {
  const local = useLocation();

  const localAtual = (nomePagina) => {
    nomePagina = nomePagina ? nomePagina : "";
    const localPagina = `/${nomePagina}`;
    console.table({
      localPagina,
      url: local.pathname,
    })
    return local.pathname === localPagina;
  }
  return (
    <nav className={styles.menu}> 
      <Link className={(localAtual() || localAtual("inicio")) && styles.localAtual} to="inicio">
        <HomeOutlined />
        <p>Início</p>
      </Link>

      <div>
        <UserOutlined />
        <p>Login</p>
      </div>
    </nav>
  )
};