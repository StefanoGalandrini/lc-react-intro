import style from "../css/modules/TheHeader.module.css";

export default function TheHeader() {
  return (
    <header className={style.header} >
      <h1 className="text-lg font-bold">Titolo</h1>
    </header>
  );
}