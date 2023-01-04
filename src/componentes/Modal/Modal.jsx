import React from "react";
import { Modal as ModalAnt } from "antd";

export const Modal = (props) => {
  const { modalAberto, salvaModalAberto, children, className } = props;

  const fechaModal = () => {
    salvaModalAberto(false);
  }

  return (
    <ModalAnt
      className={className}
      open={modalAberto}
      onOk={fechaModal}
      onCancel={fechaModal}
      footer={[]}
    >
      {children}
    </ModalAnt>
  );
}