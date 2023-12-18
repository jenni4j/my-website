import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      </div>
  );
}

export default App;
