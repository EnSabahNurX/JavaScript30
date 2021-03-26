const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
const tab = document.querySelector('#battle-log')
let lastHole
let timeUp = false
let score = 0
tab.innerHTML = ''
tab.size = 0


function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length)
    const hole = holes[idx]
    if (hole === lastHole) {
        return randomHole(holes)
    }
    lastHole = hole
    return hole
}

function peep() {
    const time = randomTime(500, 1000)
    const hole = randomHole(holes)
    hole.classList.add('up')
    setTimeout(() => {
        hole.classList.remove('up')
        if (!timeUp) peep()
    }, time);
}

function startGame() {
    score = 0
    scoreBoard.textContent = 0
    timeUp = false
    peep()
    setTimeout(() => {
        timeUp = true
        tab.size++
        let item = document.createElement('option')
        item.text = `Score: ${score}`
        tab.appendChild(item)
        tab.style.visibility = 'visible'
    }, 10000)
}

function bonk(e) {
    if (!e.isTrusted) return // anti-cheaters
    if (!timeUp && (e.path[1].classList != lastHole.classList)) {// avoid double bonk at the same mole
        score++
        scoreBoard.textContent = score
        this.classList.remove('up')
    }
}

moles.forEach(mole => mole.addEventListener('click', bonk))