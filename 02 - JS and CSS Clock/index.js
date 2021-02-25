const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secHand = document.querySelector('.second-hand')
const allHands = document.querySelectorAll('.hand')
function setDate() {

    const now = new Date()
    const hours = (now.getHours() / 12 * 360) + 90
    hourHand.style.transform = `rotate(${hours}deg)`
    const mins = (now.getMinutes() / 60 * 360) + 90
    minHand.style.transform = `rotate(${mins}deg)`
    const seconds = (now.getSeconds() / 60 * 360) + 90
    secHand.style.transform = `rotate(${seconds}deg)`
    if (hours === 90 || mins === 90 || seconds === 90) {
        allHands.forEach(hand => hand.style.transition = 'none') // remove the glitch when the degree reach 360
    } else {
        allHands.forEach(hand => hand.style.transition = '') // reset the style to the css sheet default
    }
}
setDate()
setInterval(setDate, 1000)

// const allHands = document.querySelectorAll('.hand')
// if(secondsDegrees === 90) {
//     allHands.forEach(hand => hand.style.transition = 'none')
// } else {
//     allHands.forEach(hand => hand.style.transition = '')
// }