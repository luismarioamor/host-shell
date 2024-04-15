import style from "./style.module.css";
export default function Button() {
  return (
    <button className={style.button} id="buttonChange">
      Cambiar
    </button>
  );
}
