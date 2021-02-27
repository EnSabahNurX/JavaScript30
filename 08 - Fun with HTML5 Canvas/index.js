const canvas = document.querySelector('#draw')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 25
// ctx.globalCompositeOperation = 'multiply'
// ctx.globalCompositeOperation = 'hue'
ctx.globalCompositeOperation = 'luminosity'

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let directionFlag = false
let lineSize = 10

function draw(e) {
    // [lastX, lastY] = [e.offsetX, e.offsetY]
    if (!isDrawing) return // stop the fucntion from running when they are not moused down
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.lineWidth = lineSize
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
    hue = (hue + 1) % 360
    if (lineSize >= 30 || lineSize <= 10) {
        directionFlag = !directionFlag
    }
    if (directionFlag) {
        lineSize += 0.2
    } else {
        lineSize -= 0.2
    }
}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
