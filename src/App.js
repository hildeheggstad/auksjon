import './App.css';
import nanna1 from './bilder/nanna11.jpg';
import nanna2 from './bilder/nanna2.jpg';
import nanna3 from './bilder/nanna3.jpg';
import mona from './bilder/mona.png';

function App() {
  return (
    <div className="forside">
        <h2 className={"overskrift"}>
          Auksjon
        </h2>
            <img  className={"auksjon_bilde"} src={nanna1}></img>
            <img  className={"auksjon_bilde"} src={mona}></img>
            <img className={"auksjon_bilde"} src={nanna2}></img>
            <img className={"auksjon_bilde"} src={nanna3}></img>
    </div>
  );
}

export default App;
