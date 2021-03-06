const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const cmin = document.querySelector('#cmin')
const cmax = document.querySelector('#cmax')

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            // console.log(localMediaStream)
            video.srcObject = localMediaStream
            video.play()
        })
        .catch(err => console.log(`OH NO!!!`, err))
}

function paintToCanvas() {
    const width = video.videoWidth
    const height = video.videoHeight
    canvas.width = width
    canvas.height = height
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height)
        // take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height)
        // mess with them

        // pixels = redEffect(pixels)

        // pixels = redrgbSplit(pixels)

        // ctx.globalAlpha = 0.3

        pixels = greenScreen(pixels)

        // put them back
        ctx.putImageData(pixels, 0, 0)

    }, 16)
}

function takePhoto() {
    // play the sound
    snap.currentTime = 0
    snap.play()

    // take the data out of the canvas
    const data = canvas.toDataURL('image/png')
    // console.log(data)
    const link = document.createElement('a')
    link.href = data
    link.setAttribute('download', 'handsome')
    link.innerHTML = `<img src="${data}" alt="Handsome Man" >`
    // link.textContent = ('Download Image')
    strip.insertBefore(link, strip.firstChild)
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] += 50 // RED
        pixels.data[i + 1] -= 50 // GREEN
        pixels.data[i + 2] *= 0.5 // BLUE
    }
    return pixels
}

function redrgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i + 0] // RED
        pixels.data[i + 100] = pixels.data[i + 1] // GREEN
        pixels.data[i - 150] = pixels.data[i + 2] // BLUE
    }
    return pixels
}

function greenScreen(pixels) {
    const levels = []
    document.querySelectorAll('.rgb input').forEach(input => {
        levels[input.name] = input.value
    })
    for (i = 0; i < pixels.data.length; i += 4) {
        red = pixels.data[i + 0]
        green = pixels.data[i + 1]
        blue = pixels.data[i + 2]
        alpha = pixels.data[i + 3]

        if (red >= levels.rmin
            && green >= levels.gmin
            && blue >= levels.bmin
            && red <= levels.rmax
            && green <= levels.gmax
            && blue <= levels.bmax) {
            // take it out!
            pixels.data[i + 3] = 0
        }
    }
    return pixels
}

function hexToRGB(color) {
    color = color.replace(/#/, '')
        .match(/.{1,2}/ig)
    return [
        parseInt(color[0], 16),
        parseInt(color[1], 16),
        parseInt(color[2], 16)
    ]
}

function updateColor(e) {
    let colorCmin = hexToRGB(cmin.value)
    let colorCmax = hexToRGB(cmax.value)
    let colors = []
    for (i = 0; i < 3; i++) {
        colors = [...colors, colorCmin[i], colorCmax[i]]
    }
    document.querySelectorAll('.rgb input').forEach((input, idx) => {
        input.value = colors[idx]
        console.log(input.value)
    })
    console.log(colors)

}

getVideo()
video.addEventListener('canplay', paintToCanvas)
cmin.addEventListener('change', updateColor)
cmax.addEventListener('change', updateColor)