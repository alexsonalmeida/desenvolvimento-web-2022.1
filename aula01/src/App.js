import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route, Link} from "react-router-dom";
import Home from './Components/navegacao/Home';
import About from './Components/navegacao/About';
import Pagina1 from './Components/navegacao/Page1';
import Pagina2 from './Components/navegacao/Page2';
import Arena from './Components2/Arena';
import Hero from './Components2/Hero';
import Enemy from './Components2/Enemy';
import Contador from './Components/hooks/Contador';

//const img = "https://assets.puzzlefactory.pl/puzzle/334/029/original.webp"

function App() {
  return (
    <div className="container" >

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand" style={{paddingLeft:20}}>
          UFC
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to="about" className="nav-link">
                About
              </Link>
            </li>
            <li className="navitem">
              <Link to="page1" className="nav-link">
                Pagina1
              </Link>
            </li>
            <li className="navitem">
              <Link to="page2/Alexson/123456" className="nav-link">
                Pagina2
              </Link>
            </li>
          </ul>
        </div>

      </nav>

      <Routes>
        <Route path ="/" element = {<Home />} />
        <Route path ="about" element = {<About />} />
        <Route path ="page1" element = {<Pagina1 />} />
        <Route path ="page2/:nome/:id" element = {<Pagina2 />} />
      </Routes>
    </div>
  )
  /*
  return (
    <div className="App">
      <Contador />
    </div>
  )*/

  /*return (
    <div className="App">
      <Arena arena = "Castelão">
        <Hero name="Sicrano de Tal"/>
        <Enemy name="Fulano de Tal"/>
      </Arena>

      <Arena arena = "Egito">
        <Hero name="Jotaro Kujo" img = {img}/>
        <Enemy name="Dio Brando"/>
      </Arena>

      <Arena arena = "Itália">
        <Hero name="Giorno Giovanna"/>
        <Enemy name="Diavolo"/>
      </Arena>

      <Arena arena = "Estados Unidos">
        <Hero name="Jotaro Kujo"/>
        <Enemy name="Enrico Pucci"/>
      </Arena>      
    </div>
  );*/
}

export default App