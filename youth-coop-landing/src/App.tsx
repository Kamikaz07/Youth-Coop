import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Quote from './components/Quote';
import Areas from './components/Areas';
import Projects from './components/Projects';
import Team from './components/Team';
import GetInvolved from './components/GetInvolved';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Quote />
        <Areas />
        <Projects />
        <Team />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}

export default App;
