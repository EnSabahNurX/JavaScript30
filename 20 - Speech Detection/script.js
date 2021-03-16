window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
const recognition = new SpeechRecognition()
recognition.interimResults = true
recognition.lang = 'en-US'
// recognition.lang = 'pt-BR'


let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p)


recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    const poopScript = transcript.replace(/poop|poopy|poo|dump/gi, '💩')
    p.textContent = poopScript

    if (e.results[0].isFinal) {
        p = document.createElement('p')
        words.appendChild(p)
    }

    if (transcript.includes('get the weather')) {
        console.log('function do get the weather not implemented')
    }
})

// recognition.onstart = function () {
//     console.log("I'm on now")
// }

// recognition.onspeechend = function () {
//     console.log('speech is end')
// }

// recognition.onerror = function () {
//     console.log('Try again')
// }

// recognition.onresult = function (e) {
//     let current = e.resultIndex
//     let transc = e.results[current][0].transcript
//     p.textContent += transc
//     console.log(p.textContent)
// }

recognition.addEventListener('end', recognition.start)

recognition.start()