import listaPizze from "../pizze.json";
import Button from "./Button";
import PizzaCard from "./PizzaCard";



function ShowFirstIcon(props) {
  if (props.index === 0) {
    return (<div>
      <img src="/icons/first.svg" alt="" className="w-10 h-10" />
    </div>);
  }

  return "aas";
}

function SimpleButton({ testo, colore }) {
  // console.log(props);

  return (<button className={`bg-${colore}-500 hover:bg-${colore}-700 text-white font-bold py-2 px-4 rounded`}>
    {testo ?? "Sono un button"}
    {/* {testo ? testo : "Sono un button"} */}
  </button>);
}

export default function PizzasList() {

  return (
    <div className="mt-6 flex flex-wrap">
      {listaPizze.map((pizza, i) => {
        return (
          <div key={pizza.id} className="w-full md:w-1/2 lg:w-1/3 p-4">

            <PizzaCard 
            image={pizza.image} 
            name={pizza.name} 
            ingredients={pizza.ingredients}
            vegan={pizza.vegan}
            ></PizzaCard>
            {/* <PizzaCard pizza={pizza}></PizzaCard> */}

          </div>
        );
      })}
    </div>
  );
}