const pressed = []
const secretCode = 'ricardo'

window.addEventListener('keyup', (e) => {
    pressed.push(e.key)
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
    if (pressed.join('').includes(secretCode)) {
        cornify_add()
    } else if (e.key == 'Enter') {
        document.querySelectorAll('.__cornify_unicorn').forEach(e => e.remove())
        document.querySelectorAll('#__cornify_count').forEach(e => e.remove())
        cornify_count = 0
    }
})
