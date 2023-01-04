import React from "react";
import { useRecoilState } from "recoil";
import { usuarioState } from "../../state";
import { Campo, Botao, Modal } from "../../componentes";

import styles from "./Perfil.module.scss";

export const ModalRegistro = (props) => {
  const { modalAberto, salvaModalAberto } = props;

  const chamaRegistro = (evento) => {
    evento.preventDefault();
    const form = evento.target;
    console.log("chamou chamaRegistro", evento);
    console.table({
      email: form.emailRegistro,
      senha: form.senhaRegistro,
      confirmaSenha: form.confirmaSenhaRegistro,
    });
  }

  return (
    <Modal modalAberto={modalAberto} salvaModalAberto={salvaModalAberto}>
      <form name="formRegistro" className={styles.formRegistrar} onSubmit={chamaRegistro}>
        <Campo id="emailRegistro" name="emailRegistro" label="E-mail" type="email" required />

        <Campo id="senhaRegistro" name="senhaRegistro" label="Senha" type="password" required />

        <Campo id="confirmaSenhaRegistro" name="confirmaSenhaRegistro" label="Confirmar senha" type="password" required />

        <Botao>Registrar</Botao>
      </form>
    </Modal>
  );
}

export const Perfil = () => {
  const [usuario, salvaUsuario] = useRecoilState(usuarioState);
  const [modalAberto, salvaModalAberto] = React.useState(true);

  const autenticar = (evento) => {
    evento.preventDefault();

    console.log("chamou autenticar", evento);
  };
  const abrirRegistro = () => {
    salvaModalAberto(true);
  };

  return (
    <>
      <h1>Perfil</h1>

      {!usuario ? (
        <>
          <form className={styles.formAutenticar} onSubmit={autenticar}>
            <Campo id="email" name="email" label="E-mail" type="email" />

            <Campo id="senha" name="senha" label="Senha" type="password" />

            <Botao>Login</Botao>
            <Botao type="button" onClick={abrirRegistro}>Registrar</Botao>
          </form>
        </>) : (<></>)}

      <ModalRegistro modalAberto={modalAberto} salvaModalAberto={salvaModalAberto} />
    </>
  );
};