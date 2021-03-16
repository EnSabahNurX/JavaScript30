function playSound(c) {
    const audio = document.querySelector(`audio[data-key = "${c.keyCode}"]`)
    const key = document.querySelector(`.key[data-key = "${c.keyCode}"]`)
    if (!audio) return // stop the function from running all together
    key.classList.toggle('playing')
    audio.currentTime = 0 // rewind to the start
    audio.play()
}
function removeTransition(c) {
    if (c.propertyName !== 'transform') return // skip it if it's not a transform
    c.target.classList.remove('playing')

}
const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key =>
    key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)