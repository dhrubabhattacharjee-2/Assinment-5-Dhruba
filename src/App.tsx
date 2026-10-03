import Nav from './components/Nav';
import Hero from './components/Hero';
import TechSection from './components/TechSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />

        <TechSection />        
      </main>

      <Footer />
    </div>
  );
}

export default App;