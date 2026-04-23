import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Sobre from "./components/Sobre/Sobre";
import Solucao from "./components/Funcionalidades/solucao";
import Equipe from "./components/Equipe/components/Equipe";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Solucao />
      <Equipe />
    </>
  )
}

export default App;
