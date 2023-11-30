import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import PizzasList from './components/PizzasList';
import { useState } from 'react';
import PizzaCard from './components/PizzaCard';
import Button from './components/Button';

function App() {
  const [numero, setNumero] = useState(0);

  function incrementa() {
    setNumero(numero + 1);
  }

  return (
    // fragment
    <>
      <TheHeader />

      <Button testo="asdaaaaa" colore='red' testoCaricamento="sto lavorando....">
        <img src='/icons/first.svg' className='w-6 h-6'></img>
        Cliccami!
      </Button>

      <main className='min-h-screen'>
        <div className="container mx-auto px-4 py-6">
          {/* <header>navbar</header> */}
          <h1 className='text-4xl'>Ristoria Pizzurante</h1>
          <h2>Se non ci vieni sei ignurante</h2>

          <PizzasList></PizzasList>
        </div>
      </main>

      <TheFooter />
    </>
  );
}

export default App;
