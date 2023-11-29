import style from "../css/modules/TheHeader.module.css";
import Logo from "../assets/react.svg";

const links = [
  {
    label: 'Home',
    url: '#'
  },
  {
    label: 'Pizze',
    url: '#'
  },
  {
    label: 'Chi Siamo',
    url: '#'
  },
  {
    label: 'Contatti',
    url: '#'
  },
];

export default function TheHeader() {

  return (
    <header className={style.header} >
      <h1 className={style.title + " flex gap-4 items-center"}>
        <img src="/vite.svg" alt="" />

        Ristoria Pizzurante
        
        <img src={Logo} alt="" />
      </h1>


      <ul className={style['nav-list']}>
        {
          // Return implicito
          // links.map((link) => <li><a href="#">{link.label}</a></li>)

          // Return esplicito
          links.map((link, i) => {
            return <li key={i}><a href="#">{link.label}</a></li>;
          })
        }
      </ul>
    </header>
  );
}