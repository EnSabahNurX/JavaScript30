const timeNodes = document.querySelectorAll('[data-time]')


// const seconds = Array.from(timeNodes).map(node => node.dataset.time)
// const seconds = [...timeNodes]
//     .map(node => node.dataset.time)
//     .map(t => {
//         const [mins, secs] = t.split(':').map(Number)
//         return (mins * 60) + secs
//     }).reduce((sum, x) => sum + x)

const seconds = [...timeNodes].reduce((sum, x) => sum + Number(x.dataset.time.split(':')[0]) * 60 + Number(x.dataset.time.split(':')[1]), 0)

let secLeft = seconds
const hours = Math.floor(secLeft / 3600)
secLeft %= 3600
const mins = Math.floor(secLeft / 60)
secLeft %= 60
console.log(hours, mins, secLeft)
