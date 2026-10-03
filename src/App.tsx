import Nav from './components/Nav';
import Hero from './components/Hero';
const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
      </main>

    </div>
  );
};

export default App;