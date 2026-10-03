import Nav from './components/Nav';
import Hero from './components/Hero';
import TechSection from './components/TechSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />

        <TechSection />        
      </main>

    </div>
  );
}

export default App;