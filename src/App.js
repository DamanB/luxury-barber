import AboutUs from 'views/AboutUs';
import Navbar from './components/nav/Navbar';
import Hero from './views/Hero'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
    </div>
  );
}

export default App;
