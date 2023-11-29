import listaPizze from "../pizze.json";

/**
 * Se le immagini sono presenti nella cartella public, è sufficiente scrivere il percorso assoluto: "/icons/first.svg"
 * Se le immagini sono presenti nella cartella src/assets, è necessario importare dinamicamente l'immagine e utilizzare l'url generato
 * @param {*} name 
 * @returns 
 */
function getImgUrl(name) {
  return new URL('../assets/imgs/pizze/' + name, import.meta.url).href;
}

function showFirstIcon(i) {
  if (i === 0) {
    return <div>
      <img src="/icons/first.svg" alt="" className="w-10 h-10" />
    </div>;
  }

  return '';
}

export default function PizzasList() {
  
  return (
    <div className="mt-6 flex flex-wrap">
      {listaPizze.map((pizza, i) => {
        return <div key={pizza.id} className="w-full md:w-1/2 lg:w-1/3 p-4">

          <div className="bg-gray-200 rounded-lg border border-gray-400 min-h-full overflow-hidden">

            <div className="aspect-video">
              <img src={getImgUrl(pizza.image)}
                alt="" className="w-full h-full object-cover" />
            </div>

            <div className="p-4 ">
              <h3>{pizza.name}</h3>

              <div className="flex gap-2 flex-wrap">
                {pizza.ingredients.map((ingredient, i) => {
                  return <span key={"ingrediente_" + i}
                    className={"rounded-lg px-2 text-xs " + (ingredient === 'pomodoro' ? 'bg-red-500' : 'bg-blue-300')}>
                    {ingredient}
                  </span>;
                })}
              </div>
            </div>

            {/* {(i === 0)
              ? <div>
                <img src="/icons/first.svg" alt="" className="w-10 h-10" />
              </div>
              : ''
            } */}
            {showFirstIcon(i)}

          </div>

        </div>;
      })}
    </div>
  );
}