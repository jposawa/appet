import styles from "./Campo.module.scss";

export const Campo = (props) => {
  const { id, name, type, className, style, placeholder, label, required } = props;
  
  return (
    <div className={`${styles.input} ${className}`}>
      <input id={id} name={name} type={type} style={style} placeholder={placeholder} required />
      {label && id && <label htmlFor={id}>{label}</label>}
    </div>
  );
}