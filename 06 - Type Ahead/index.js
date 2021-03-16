// Point to a JSON data
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
// Create a array of places to populate later
const cities = []

// Fetching all data from JSON file
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data)) // populating the array of places

// Function to return a array of all matched places following the input
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}


// Function to show the suggestions
function displayMatches() {
    const matchArray = findMatches(this.value, cities) // filtering only the matched places in a array
    const html = matchArray.map(local => {
        const regex = new RegExp(this.value, 'gi') // taking a updated regex
        const cityName = local.city.replace(regex, `
            <span class="hl">${this.value}</span>
        ` ) // highlighting the matched city by the regex including a new class controlled by css sheet
        const stateName = local.state.replace(regex, `
                    <span class="hl">${this.value}</span>
        ` ) // highlighting the matched state by the regex including a new class controlled by css sheet

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(local.population)}</span>
            </li>
        `
    }).join('') // returning a string containing all matched data
    suggestions.innerHTML = html // filling the suggestions pallet with matched data
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') // converting the normal number in number with commas
}

const searchInput = document.querySelector('.search') // getting input control
const suggestions = document.querySelector('.suggestions') // getting suggestions control

searchInput.addEventListener('change', displayMatches)
searchInput.addEventListener('keyup', displayMatches) // calling update since the input is changed or typed any new letter
