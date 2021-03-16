const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog']
const sortedBands = alphaSort(bands)

// Function to sort any array ignoring the article
function alphaSort(arr) {
    return arr.sort((a, b) => a.replace(/(a|an|the)\s/i, '') > b.replace(/(a|an|the)\s/i, '') ? 1 : -1)
}

// document.querySelector('#bands').innerHTML =
//     sortedBands.map(band => `
//     <li>${band}</li>
// `).join('')
console.log(document.querySelector('#bands').innerHTML =
    sortedBands.map(band => `
<li>${band}</li>
`).join(''))