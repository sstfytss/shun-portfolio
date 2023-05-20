import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Experience";
import Contact from "./components/Contact";
import Career from "./components/Career";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Technologies />
      <Portfolio />
      <Career />
      <Contact />
      
      <SocialLinks />
    </div>
  );
}

export default App;
