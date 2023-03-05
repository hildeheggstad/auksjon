import './App.css';
import nanna1 from './bilder/nanna11.jpg';
import nanna2 from './bilder/nanna2.jpg';
import nanna3 from './bilder/nanna3.jpg';
import mona from './bilder/mona.png';
import {
    avstandTilElement,
    flyttKnappAnimasjon,
    knappErInnenforSkjermen
} from './hjelpefunksjoner.js';
import React, {FunctionComponent, useEffect, useState} from 'react';

function App() {
    const [pekerPosisjon, setPekerPosisjon] = useState([]);
    const ider = ["overskrift4", "overskrift3"]
    const startTid = new Date();

    console.log(startTid.getSeconds())

    let handleMousemove = (event) => {
        const horisontalPosisjon = event.x
        const vertikalPosisjon = event.y
        setPekerPosisjon([horisontalPosisjon, vertikalPosisjon])
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMousemove);
    }, []);

    useEffect(() => {
        //const avstandMellomPekerOgKnapp = avstandTilElement("godta-ikke-godta", pekerPosisjon)
        //if (avstandMellomPekerOgKnapp < 150) {
        if (startTid%4 == 0)
            ider.forEach(i =>  flyttKnappAnimasjon(i));
        //flyttKnappAnimasjon("godta-ikke-godta")
    }, [pekerPosisjon]);

    //useEffect(() => {
      //  const knapp = document.getElementById("godta-ikke-godta")
        //if (!knappErInnenforSkjermen(knapp)) {
          //  flyttKnappAnimasjon("godta-ikke-godta")
       // }
    // }, [pekerPosisjon]);

  return (
    <div className="forside">
        <h2 className={"overskrift"}>
          Auksjon
        </h2>
        <h2 className={"overskrift2"}>
            Kunst
        </h2>
        <h2 id = {"overskrift4"} className={"overskrift3"}>
            Mot
        </h2>
        <h2  id = {"overskrift3"} className={"overskrift4"}>
            Vinden
        </h2>
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
