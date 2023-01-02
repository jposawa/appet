import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeOutlined, UserOutlined, BarsOutlined } from "@ant-design/icons";

import styles from "./Menu.module.scss";

export const Menu = () => {
  const local = useLocation();

  const localAtual = (nomePagina) => {
    nomePagina = nomePagina ? nomePagina : "";
    const localPagina = `/${nomePagina}`;
    
    return local.pathname === localPagina;
  }
  return (
    <nav className={styles.menu}> 
      <Link className={(localAtual() || localAtual("inicio")) ? styles.localAtual : ""} to="inicio">
        <HomeOutlined />
        <p>Início</p>
      </Link>

      <Link className={localAtual("pets") ? styles.localAtual : ""} to="pets">
        <BarsOutlined />
        <p>Pet</p>
      </Link>

      <Link className={`${styles.itemSeparado} ${localAtual("perfil") ? styles.localAtual : ""}`} to="perfil">
        <UserOutlined />
        <p>Login</p>
      </Link>
    </nav>
  )
};