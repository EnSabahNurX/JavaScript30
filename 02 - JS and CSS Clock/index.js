const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secHand = document.querySelector('.second-hand')
function setDate() {
    const now = new Date()
    const hours = (now.getHours() / 12 * 360) + 90
    hourHand.style.transform = `rotate(${hours}deg)`
    const mins = (now.getMinutes() / 60 * 360) + 90
    minHand.style.transform = `rotate(${mins}deg)`
    const seconds = (now.getSeconds() / 60 * 360) + 90
    secHand.style.transform = `rotate(${seconds}deg)`

}
setDate()
setInterval(setDate, 1000)