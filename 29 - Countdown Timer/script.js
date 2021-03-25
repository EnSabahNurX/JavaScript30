let countdown
const title = document.title
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown)

    const now = Date.now()
    const then = now + seconds * 1000
    displayTimeLef(seconds)
    displayEndTime(then)

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)
        if (secondsLeft < 0) {
            clearInterval(countdown)
            document.title = document.title + ' Finished!'
            play()
            return
        }
        displayTimeLef(secondsLeft)
    }, 1000);
}

function play() {
    let audio = new Audio(
        'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3')
    audio.play()
}

function displayTimeLef(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    document.title = title + ' ' + display
    timerDisplay.textContent = display
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours()
    const min = end.getMinutes()
    const sec = end.getSeconds()
    endTime.textContent = `Be back at ${hour}:${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`

}

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const mins = this.minutes.value
    timer(mins * 60)
    this.reset()
})