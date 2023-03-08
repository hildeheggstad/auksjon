export const flyttKnappAnimasjon = (knappID: string) => {
    const knapp = document.getElementById(knappID)
    let randomFlyttHorisontalt = Math.random()*24
    randomFlyttHorisontalt = randomFlyttHorisontalt-12
    let randomFlyttVertikalt = Math.random()*24
    randomFlyttVertikalt = randomFlyttVertikalt-12
    knapp.style.transform = `translate(${randomFlyttHorisontalt}px,${randomFlyttVertikalt}px)`
}
