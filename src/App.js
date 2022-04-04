import './App.css';
import Footer from './componentes/footer/footer';
import Header from './componentes/header/header';
import Presentacion from './componentes/presentacion/presentacion';
import Proyectos from './componentes/proyectos/proyectos';
import Skills from './componentes/Skills/skills';

function App() {
  return (
    <div className="App">
        <Header/>
        <h2>Sobre Mi</h2>
        <Presentacion/>
        <h2>Skills</h2>
        <Skills/>
        <h2>Proyectos</h2>
        <Proyectos/>
        <Footer/>
    </div>
  );
}

export default App;
