export const hentPosisjon = (elementID: string) =>  {
    const element = document.getElementById(elementID);
    const rect = element.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

export const hentFullPosisjon = (elementID: string) =>  {
    const element = document.getElementById(elementID);
    const rect = element.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
        right: rect.right + window.scrollX,
        bottom: rect.bottom + window.scrollY,
    };
}

export const avstandTilElement = ( elementID , posisjonPeker: []) => {
    const posisjonTilKnapp = hentPosisjon(elementID)
    const horisontalAvstand = Math.abs(posisjonPeker[0] - posisjonTilKnapp.left)
    const vertikalAvstand = Math.abs(posisjonPeker[1] - posisjonTilKnapp.top)
    const avstand = Math.sqrt(Math.pow(horisontalAvstand,2) + Math.pow(vertikalAvstand,2))
    return avstand
}

export const flyttKnappAnimasjon = (knappID: string) => {
    const knapp = document.getElementById(knappID)
    let randomFlyttHorisontalt = Math.random()*24*3
    randomFlyttHorisontalt = randomFlyttHorisontalt-12*3
    let randomFlyttVertikalt = Math.random()*24*3
    randomFlyttVertikalt = randomFlyttVertikalt-12*3
    knapp.style.transform = `translate(${randomFlyttHorisontalt}px,${randomFlyttVertikalt}px)`
}

export const flyttErInnenforSkjermen = (knapp: HTMLButtonElement, flyttHorisontalt: number, flyttVertikalt: number) => {
    var bounding = knapp.getBoundingClientRect();
    if ((bounding.top + flyttVertikalt) < 0) {
        return false
    }
    if ((bounding.left + flyttHorisontalt) < 0) {
        return false
    }
    if ((bounding.bottom + flyttVertikalt) > (window.innerHeight || document.documentElement.clientHeight)) {
        return false
    }
    if ((bounding.right + flyttHorisontalt)> (window.innerWidth || document.documentElement.clientWidth)) {
        return false
    }
    return true
}

export const knappErInnenforSkjermen = (knapp: HTMLButtonElement) => {
    var bounding = knapp.getBoundingClientRect();
    if (bounding.top < 0) {
        return false
    }
    if (bounding.left  < 0) {
        return false
    }
    if (bounding.bottom > (window.innerHeight || document.documentElement.clientHeight)) {
        return false
    }

    if (bounding.right > (window.innerWidth || document.documentElement.clientWidth)) {
        return false
    }
    return true
}
