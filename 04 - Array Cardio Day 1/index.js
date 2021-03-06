// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
// console.table(fifteen)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
// console.table(fullNames)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((a, b) => a.year - b.year)
// console.table(ordered)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0)
// console.log(totalYears)

// 5. Sort the inventors by years lived
const yearsLived = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year))
// console.table(yearsLived)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category')
// const links = [...category.querySelectorAll('a')]
// const de = links.map(link => link.textContent)
//     .filter(link => /de/ig.test(link))


// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((a, b) => (a.split(', ')[1] > b.split(', ')[1]) ? 1 : -1)
// console.table(alpha)


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
// const transportatiom = data.reduce((obj, item) => {
//     obj[item] = obj[item] + 1 || 1
//     return obj
// }, {})
// // console.log(transportatiom)

// Alternatives solutions
// const transportatiom = data.reduce((obj, item) => (obj[item] += 1,obj), Object.fromEntries(data.map(m => [m, 0]))) // Object.fromEntries to convert any kind of pair array ou Map in a Object
// const transportatiom = data.reduce((obj, item) => (obj[item] += 1, obj), Object.assign(...data.map(v => ({ [v]: 0 })))) // Object.assign convertinf the Array in Set collection
// const transportatiom = data.reduce((obj, item) => obj.set(item, obj.get(item) + 1), new Map(data.map(m => [m, 0]))) // Map
// const transportatiom = Object.fromEntries(data.reduce((obj, item) => obj.set(item, obj.get(item) + 1), new Map(data.map(m => [m, 0])))) // Convert Map in Object

// Best solution
const transportatiom = data.reduce((obj, item) => (obj[item] = obj[item] + 1 || 1, obj), {})
console.table(transportatiom)


// Ways to generate Objects from Arrays
// let temp = Object.assign(...data.map(v => ({ [v]: 0 }))) // how to generate a Object from a array and iniciate with zero.
// let temp2 = Object.fromEntries(data.map(m => [m, 0]))

// How to encapsulate all in one line using .reduce from a Map converting in Object
// let obj = [...map.entries()].reduce((obj, [key, value]) => (obj[key] = value, obj), {});
