export const flyttKnappAnimasjon = (knappID: string) => {
    const knapp = document.getElementById(knappID)
    let randomFlyttHorisontalt = Math.random()*24*6
    randomFlyttHorisontalt = randomFlyttHorisontalt-12*6
    let randomFlyttVertikalt = Math.random()*24*6
    randomFlyttVertikalt = randomFlyttVertikalt-12*6
    knapp.style.transform = `translate(${randomFlyttHorisontalt}px,${randomFlyttVertikalt}px)`
}
