import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';
import PizzasList from './components/PizzasList';
import { useState } from 'react';
import { number } from 'prop-types';
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

      <main className='min-h-screen'>
        <div className="container mx-auto px-4 py-6">
          {/* <header>navbar</header> */}
          <h1 className='text-4xl'>Ristoria Pizzurante</h1>
          <h2>Se non ci vieni sei ignurante</h2>

          <Button></Button>
          <button onClick={incrementa}>Incrementa</button>
          <p>{numero}</p>

          <PizzasList></PizzasList>
        </div>
      </main>

      <TheFooter />
    </>
  );
}

export default App;
