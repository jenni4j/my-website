import './App.css';
import Home from "./pages/Home";
import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      </div>
  );
}

export default App;
