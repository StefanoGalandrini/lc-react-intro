import style from "../css/modules/Card.module.css";
import { getImgUrl } from "../utilities/getImgUrl";
import Button from "./Button";

function IngredientsList({ ingredients }) {
  const toReturn = [];
  const colorsMap = {
    "pomodoro": "bg-red-300",
    "mozzarella": "bg-yellow-300",
    "funghi": "bg-pink-300",
    "zucchine": "bg-green-300",
    "mozzarella vegana": "bg-violet-300",
  };

  ingredients.forEach((ingredient, i) => {
    const color = colorsMap[ingredient] ?? "bg-gray-100";

    toReturn.push(
      <span key={"ingrediente_" + i}
        className={"rounded-lg px-2 text-xs " + color}>
        {ingredient}
      </span>);
  });

  return toReturn;
  /* return {
    ingredients.map((ingredient, i) => {
      return <span key={"ingrediente_" + i}
        className={"rounded-lg px-2 text-xs " + (ingredient === 'pomodoro' ? 'bg-red-500' : 'bg-blue-300')}>
        {ingredient}
      </span>;
    })
  }; */
}

export default function PizzaCard({ image, name, vegan, ingredients }) {
  // const { image, name, ingredients } = pizza;

  return (
    <div className="bg-gray-100 rounded-lg border border-gray-100 min-h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">

      <div className="aspect-video overflow-hidden group">
        <img src={getImgUrl("pizze/" + image)}
          alt="" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 ease-in-out" />
      </div>

      <div className="p-4 "> 
        <h3 className="flex gap-2 items-center pb-4">
          {/* {vegan ? <img src="/icons/vegan-icon.svg" className="w-4 h-4"></img> : ''} */}
          {vegan && <img src="/icons/vegan-icon.svg" className="w-4 h-4"></img>}
          {name}
        </h3>

        <div className="flex gap-2 flex-wrap mb-4">
          <IngredientsList ingredients={ingredients}></IngredientsList>
        </div>

        <Button className="ms-auto"
          small={vegan && true}
          colore={vegan ? 'green' : 'orange'}
          light>
          <img src="/icons/cart-shopping-solid.svg"></img>
          Aggiungi
        </Button>
      </div>
    </div>
  );
}