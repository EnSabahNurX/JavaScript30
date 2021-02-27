const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('Hello')
// Interpolated
console.log('Hello, I am a %s string', '💩')
// Styled
console.log('%c I am some great text', 'font-size: 50px; background: black; color: white; text-shadow: -2px 2px 3px blue')
// warning!
console.warn('Warning, be careful cowboy!')
// Error :|
console.error('You did some 💩')
// Info
console.info("Elephants can't jump")
// Testing
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'You did not select the right Element!')
console.assert(1 === 2, 'That is wrong!')
// clearing
console.clear()
// Viewing DOM Elements
console.log(p)
console.dir(p)
console.clear()
// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    // console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age}`)
    console.log(`${dog.name} is ${dog.age * 7} dog years old`)
    console.groupEnd(`${dog.name}`)

    console.clear()
})
// counting
console.count('Bob')
console.count('Bob')
console.count('Jack')
console.count('Bob')
console.count('Jack')
console.count('Bob')

console.clear()
// timing
console.time('fetching data2')
fetch('https://api.github.com/users/ensabahnurx')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data2')
        console.log(data)
    })

// table
console.table(dogs)