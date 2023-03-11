import './App.css';
import eskil1 from './salgs/01_Eskil Bast Uten tittel (sommerfugl).jpg';
import eskil12 from './salgs/01_Eskil Bast, Uten tittel (sommerfugl) 2.jpg';
import august2 from './salgs/02_August Sandberg .jpg';
import karin3 from './salgs/03 - Karin M. Valum.jpg';
import thale4 from './salgs/04_Thale Blix Fastvold.jpg';
import ylva5 from './salgs/05_YlvaGreni.jpg';
import unnamed6 from './salgs/06_unnamed.jpg';
//mangler 7
import adrian8 from './salgs/08_Adrianbugge2.jpg';
import torild9 from './salgs/09_Torild Rødland.jpeg';
import marianne10 from './salgs/10_Marianne Gihle.jpeg';
import yngvar11 from './salgs/11_Yngvar Larsen.jpeg';
// ella har fire beskrivelser men bare et bilde
import ella12 from './salgs/12_Ella Mørtsell.JPG';
import mattias13 from './salgs/13 Mattias Hellberg.jpeg';


import kim14 from './salgs/14 - Kim Henning Andreassen.jpeg';
import maria15 from './salgs/15 Maria Sandvik Solbjør.jpeg';
import helene16 from './salgs/16 Helene Roer.jpeg';
//mangler 17 av ben clement
import Wenche18 from './salgs/18 Wenche Sandra M Disington..jpeg';
import io19 from './salgs/19 - Io Sivertsen .jpg';
import karl20 from './salgs/20 - Karl Ingar Røys.jpg';
import Annaise21 from './salgs/21 Annalise Wimmer.jpg';
import ben22 from './salgs/22 - Benjamin Clement .jpg';
import Anna23 from './salgs/23 - Anna-Victoria.jpeg';
import Kari24 from './salgs/24 -Kari Glomsaas .jpeg';
import Kari242 from './salgs/24 -Kari Glomsaas 2.jpeg';
//mangler 25 av Hermann
import tanja26 from './salgs/26 - Tanja Thorjussen.jpeg';
import maya27 from './salgs/27 - Maya W. Nowinska Craig .jpg';
import ingrid28 from './salgs/28 - Ingrid Sofie Håskjold.JPG';
import ingrid282 from './salgs/28 - Ingrid Sofie Håskjold 2.jpeg';
//mangler 29 av Matti
import oteli30 from './salgs/30 - Othelia Engelstad.jpeg';
import linda31 from './salgs/31 - Linda Flø.jpeg';
// mangler 32 av Calin a
//mangler 33 av Hedda
//mangler 34 av Ane
import madelon35 from './salgs/35 - Madelon Verbeek.jpg';
import ronja36 from './salgs/36 - Ronja Sofie Helgesen.jpg';
//mangler 37 av Nanna
//mangler 38 av Zarina
//pdf - funker ikke
import andrea39 from './salgs/39 - Andrea Galiazzo.pdf';
import marthe40 from './salgs/40 - Marthe Ramm Fortun 2.jpeg';
//mangler 41 av Eline
//mangler 42 av Silje
//mangler 43 av Ragnhild
import hamid44 from './salgs/44 - Hamid Waheed 2.jpg';
import julia45 from './salgs/45 - Julia Jayko Fossland.jpeg';
import elisa46 from './salgs/46 - Elisa Halvorsen Castillo.jpg';
import maya47 from './salgs/47 - Maya Økland.jpg';
import lars48 from './salgs/48 - Lars Gangdal og Petter Wang.jpg';
// 49 - kun fire bilder med beskrivelse av seks
import maria49 from './salgs/49 Maria Viirros.jpg';
import eili50 from './salgs/50 - Eili Bråstad.png';

import plakat from './bilder/banner-kunst-vind.jpg'
import {
    flyttKnappAnimasjon,
} from './hjelpefunksjoner.js';
import React, { useEffect, useState} from 'react';

function App() {
    const ider = ["overskrift4", "overskrift3"]
    const startTid = new Date();

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 200);
        return () => {
            clearInterval(interval);
        };
    }, []);


    useEffect(() => {
        ider.forEach(i =>  flyttKnappAnimasjon(i));
    }, [time]);

  return (
    <div className="forside">
        <div className={"forside-topp"}>
            <img  className={"auksjon_banner"} src={plakat}></img>
        <h2 className={"overskrift2"}>
            Kunst
        </h2>
        <h1 id = {"overskrift4"} className={"overskrift3"}>
            Mot
        </h1>
        <h1  id = {"overskrift3"} className={"overskrift4"}>
            Vinden
        </h1>

            </div>

        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={eskil1}></img>
            <div>
                01 - Eskil Halfdan von Hanno Bast <br/>
                Uten tittel, 2021 <br/>
                Størrelse: 8 x 12 cm / 30 x 35 cm <br/>
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={august2}></img>
            <div>
                02 - August Sandberg <br/>
                Swedish farm, 2021 <br/>
                40x30 akryl på lerret <br/>
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={karin3}></img>
            <div>
                03 - Karin M. Valum <br/>
                Inn i skogen, 2021 <br/>
                Tusjtegning på papir,42 x 32 cm. Innrammet med syrefri passepartout.<br/>
                2000 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={thale4}></img>
            <div>
                04 - Thale Blix Fastvold & Tanja Thorjussen / LOCUS <br/>
                “Kvinner - Elsa Laula Renberg”, 2019 <br/>
                Risografi i opplag på 50 eks. A3 str<br/>
                2000 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={ylva5}></img>
            <div>
                05 - Ylva Greni <br/>
                Det glatte lag, 2021 <br/>
                70 x 100 cm, Opplag 40<br/>
                4000 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={unnamed6}></img>
            <div>
                06 - Kajsa Dahlberg, Miriam Döring, Annike Flo, Sive Hamilton Helle, Eli Maria Lundgaard, malatsion, Lexie Owen, Rebekka Sæter och Ylva Westerlund <br/>
                Publikationen: Nature Scribbles and Flesh Reads <br/>
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={adrian8}></img>
            <div>
                08 - Adrian Bugge <br/>
                Inngrep / Interventions, 2023 <br/>
                Kerber Verlag og Uten Tittel 2023 <br/>
                Design: Aslak Gurholt (Yokoland). Tekster av: Adrian Bugge, Henrik H. Svensen, på norsk og oversatt til engelsk. <br/>
                23 x 32 cm, 128 sider, Hardcover <br/>
                500 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={torild9}></img>
            <div>
                09 - Torild Rødland <br/>
                Blodsbånd, evig reise <br/>
                oljemaleri, 25x44 cm
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={marianne10}></img>
            <div>
                10 - Marianne Gihle <br/>
                «Jazzmesse i Nidarosdomen» tresnitt (2013), opplagsnummer 3/16.<br/>
                oljemaleri, 25x44 cm <br/>
                1500 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={yngvar11}></img>
            <div>
                11 - Yngvar Larsen <br/>
                OMEN NEMO, 2022<br/>
                39x53cm<br/>
                Papir: Hahnemühle 150 gram
                Unikt trykk (Monotypi, dyptrykk, tapetrykk)
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={mattias13}></img>
            <div>
                13 - Mattias Hellberg <br/>
                Little Blue<br/>
                39x53cm<br/>
                4x8cm
            </div>
            <div className={"strek"}/>
        </div>

        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={kim14}></img>
            <div>
                14 - Kim Henning Andreassen <br/>
                Uten tittel, 2021 <br/>
                Blekk på papir <br/>
                Veil pris 2000 kr <br/>
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={maria15}></img>
            <div>
                15 - Maria Sandvik Solbjør <br/>
                Tittel: Det er faen meg greit, jeg trenger ikke deg. 2023 <br/>
                105cm x 105cm. Oljemaling på lerret <br/>
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={helene16}></img>
            <div>
                16 - Helene Roer <br/>
                Uten tittel. 2023 <br/>
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={Wenche18}></img>
            <div>
                18 - Wenche Sandra M Disington<br/>
                Portrait of my Ancestors, 2022<br/>
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={io19}></img>
            <div>
                19 - Io Sivertsen
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={karl20}></img>
            <div>
                20 - Karl Ingar Røys <br/>
                Supersilenced, 2007 <br/>
                Fotografi, 30 x 40 cm Lustre 250gr<br/>
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={Annaise21}></img>
            <div>
                21 - Annalise Wimmer <br/>
                Krisp sjetong, 2023 <br/>
                3 stereoskopiske bilder. (Første kopi av første utkast.)<br/>
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={ben22}></img>
            <div>
                22 - Benjamin Clement <br/>
                Las Ovejas, 2022 <br/>
                42 x 59 cm
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={Anna23}></img>
            <div>
                23 - Anna-Victoria Borgersrud <br/>
                See Me/Reflex, 2022 <br/>
                5500 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={Kari24}></img>
            <div>
                24 - Kari Glomsaas  <br/>
                Akvarellkroki, 2017 <br/>
                30x21 cm
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={Kari242}></img>
            <div>
                24 - Kari Glomsaas  <br/>
                Kroki med rødvin og tusj, 2017 <br/>
                21x30 cm
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={tanja26}></img>
            <div>
                26 - Tanja Thorjussen <br/>
                Reinsdyr og bjørk, 2015 <br/>
                38,5 cm x 54 cm <br/>
                Veiledende pris 3500 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={maya27}></img>
            <div>
                27 - Maya W. Nowinska Craig <br/>
                Vekst, 2023 <br/>
                Linosnitt, 3x3 delt A3 format <br/>
                1500 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={ingrid28}></img>
            <img  className={"auksjon_bilde"} src={ingrid282}></img>
            <div>
                28 - Ingrid Sofie Håskjold <br/>
                1: Rødt vann, 60x60 <br/>
                2: Balanse, 70x60
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={oteli30}></img>
            <div>
                30 - Othelia Engelstad <br/>
                Badstue I, 2023, trykk nr 5/12 <br/>
                Bildet er skåret ut i mdf-plate og trykket på rispapir.
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={linda31}></img>
            <div>
                31 - Linda Flø <br/>
                Terrain Biopsy I, 2021<br/>
                Keramisk objekt, ca 10 cm i diameter. Materialer: Keramiske materialer, metalltråd, asfalt. <br/>
                Veil. pris: 3000 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={madelon35}></img>
            <div>
                35 - Madelon Verbeek <br/>
                The Protestors, 2023<br/>
                Aquarel drawing, framed in a wooden frame with a red passe-partout.
                Original, part of a series of 35 aquarel drawings that touch upon the subject of equal rights, suppression and media control.
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={ronja36}></img>
            <div>
                36 - Ronja Sofie Helgesen <br/>
                Ovenfra, 2018<br/>
                1400 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={marthe40}></img>
            <div>
                40 - Marthe Ramm Fortun <br/>
                Når du kommer, brister hotellets kropp og alle rommenes dører åpner seg, 2017.
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={hamid44}></img>
            <div>
                44 - Hamid Waheed <br/>
                Uten tittel, 2022 <br/>
                Risoprint, et print med gul/lilla pigment, et print med lilla pigment <br/>
                500 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={julia45}></img>
            <div>
                45 - Julia Jayko Fossland <br/>
                Berøringer 4, 2023 <br/>
                Silketrykk, 2-lags, A3+, opplag: 6 <br/>
                800 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={elisa46}></img>
            <div>
                46 - Elisa Halvorsen Castillo <br/>
                Cry yourself to ash, 2020 <br/>
                Silketrykk, 46cm x 64cm <br/>
                1500 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={maya47}></img>
            <div>
                47 - Maya Økland <br/>
                Eidfjord II (Sinnets irrganger), 2020. <br/>
                Analog c-print 30 x 40 cm med eikeramme og UV-glass <br/>
                3000 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={maya47}></img>
            <div>
                48 - Lars Gangdal og Petter Wang <br/>
                Werner Jensen, 2023 <br/>
                Størrelse: 50x60cm /inkl sveveramme i eik.<br/>
                9000 kr
            </div>
            <div className={"strek"}/>
        </div>
        <div className={"auksjon_bilde-container"} >
            <img  className={"auksjon_bilde"} src={eili50}></img>
            <div>
                50 - Eili Bråstad <br/>
                C-print, uten tittel, 1/10, 20x35 cm, 2023
            </div>
            <div className={"strek"}/>
        </div>
    </div>
  );
}

export default App;
