import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      </div>
  );
}

export default App;
