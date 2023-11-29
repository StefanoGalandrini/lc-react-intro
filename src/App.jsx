import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';

function App() {
  return (
    <>
      <TheHeader />

      <main className='min-h-screen'>
        <div className="container mx-auto px-4 py-6">
          <header>navbar</header>
          <h1 className='text-4xl'>Ristoria Pizzurante</h1>
          <h2>Se non ci vieni sei ignurante</h2>
        </div>
      </main>

      <TheFooter />
    </>
  );
}

export default App;
