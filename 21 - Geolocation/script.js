const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

navigator.geolocation.watchPosition(data => {
    console.log(data)
    speed.textContent = data.coords.speed.toPrecision(5)
    arrow.style.transform = `rotate(${data.coords.heading}deg)`
}, err => {
    console.log(err)
    alert('Sorry! You gotta allow that to happen!')
})
