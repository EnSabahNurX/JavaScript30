// Get our elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const fullscreenBtn = document.querySelector('.fullscreen')

// Build out functions
function togglePlay() {
    // const method = video.paused ? 'play' : 'pause'; video[method]()
    // if (video.paused) {
    //     video.play()
    // } else {
    //     video.pause()
    // }
    video[video.paused ? 'play' : 'pause']()
}

function updateButton() {
    toggle.textContent = this.paused ? '▶️' : '⏸️'
}

function skip() {
    // console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
    video[this.name] = this.value
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100

    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = e.offsetX / progress.offsetWidth * video.duration
    video.currentTime = scrubTime
}

function handleFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
}

// Hook up the event listners

video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
video.addEventListener('dblclick', handleFullscreen)

toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => {
    button.addEventListener('click', skip)
})

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mouseDown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e)) // hijacking, hehe, if the mousedown is true run scrub, else just do nothing
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)

fullscreenBtn.addEventListener('click', handleFullscreen)