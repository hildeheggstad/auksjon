import './App.css';
import nanna1 from './bilder/nanna11.jpg';
import nanna2 from './bilder/nanna2.jpg';
import nanna3 from './bilder/nanna3.jpg';
import mona from './bilder/mona.png';
import {
    flyttKnappAnimasjon,
} from './hjelpefunksjoner.js';
import React, { useEffect, useState} from 'react';

function App() {
    const ider = ["overskrift4", "overskrift3"]
    const startTid = new Date();

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 4000);
        return () => {
            clearInterval(interval);
        };
    }, []);


    useEffect(() => {
        ider.forEach(i =>  flyttKnappAnimasjon(i));
    }, [time]);

  return (
    <div className="forside">
        <h2 className={"overskrift"}>
          Auksjon
        </h2>
        <h2 className={"overskrift2"}>
            Kunst
        </h2>
        <h1 id = {"overskrift4"} className={"overskrift3"}>
            Mot
        </h1>
        <h1  id = {"overskrift3"} className={"overskrift4"}>
            Vinden
        </h1>
            <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={nanna1}></img>
                <div>
                    BLABLA nanna ass
                </div>
                <div className={"strek"}/>
            </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={mona}></img>
            <div>
                BLABLA nanna ass
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img className={"auksjon_bilde"} src={nanna3}></img>
            <div>
                BLABLA nanna ass
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img className={"auksjon_bilde"} src={nanna2}></img>
            <div>
                BLABLA nanna ass
            </div>
            <div className={"strek"}/>
        </div>
    </div>
  );
}

export default App;
