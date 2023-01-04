import styles from "./Botao.module.scss";

export const Botao = (props) => {
  const { id, name, type, className, style, children, onClick } = props;
  
  return (
    <button 
      id={id}
      name={name}
      type={type || "submit"}
      className={`${styles.botao} ${className}`}
      style={style} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}