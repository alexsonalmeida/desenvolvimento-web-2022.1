import './App.css';
import Arena from './Components2/Arena';
import Hero from './Components2/Hero';
import Enemy from './Components2/Enemy';

const img = "https://assets.puzzlefactory.pl/puzzle/334/029/original.webp"

function App() {
  return (
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
  );
}

export default App