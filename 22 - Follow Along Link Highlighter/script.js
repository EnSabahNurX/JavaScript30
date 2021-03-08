const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')
const container = document.createElement('div')
const rect = document.createElement('div')
highlight.classList.add('highlight')
container.classList.add('container')
rect.classList.add('rect')
// document.body.append(highlight)
document.body.append(container)
container.appendChild(highlight)
container.appendChild(rect)

function highlightLink() {
    // console.log(this)
    const linkCoords = this.getBoundingClientRect()
    // console.log(linkCoords)
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }
    const coordsRect = {
        width: linkCoords.width + 100,
        height: linkCoords.height + 120,
        top: linkCoords.top + window.scrollY + 25,
        left: linkCoords.left + window.scrollX - 50
    }

    highlight.style.width = `${coords.width}px`
    highlight.style.height = `${coords.height}px`
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
    rect.style.width = `${coordsRect.width}px`
    rect.style.height = `${coordsRect.height}px`
    rect.style.transform = `translate(${coordsRect.left}px, ${coordsRect.top}px)`
    rect.innerHTML = this.innerHTML
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))