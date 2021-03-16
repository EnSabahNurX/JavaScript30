const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 200 // 100%

function shadow(e) {
    // const width = hero.offsetWidth
    // const heigth = hero.offsetHeight
    const { offsetWidth: width, offsetHeight: height } = hero
    // const x = e.offsetX
    // const y = e.offsetY
    let { offsetX: x, offsetY: y } = e
    if (this !== e.target) {
        x += e.target.offsetLeft
        y += e.target.offsetTop
    }
    // console.log(x, y)
    const xWalk = Math.round((x / width * walk) - (walk / 2))
    const yWalk = Math.round((y / height * walk) - (walk / 2))
    // console.log(xWalk, yWalk)
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 3px red,
    ${xWalk * -1}px ${yWalk}px 3px yellow,
    ${yWalk}px ${xWalk * -1}px 3px orange,
    ${yWalk * -1}px ${xWalk}px 3px pink
    `
}

hero.addEventListener('mousemove', shadow)