// start with strings, numbers and booleans

// let age = 100
// let age2 = age
// console.log(age, age2)
// age = 200
// console.log(age, age2)

// let name = 'Ricardo'
// let name2 = name
// console.log(name, name2)
// name = 'Almeida'
// console.log(name, name2)

// let bool = true
// let bool2 = bool
// console.log(bool, bool2)
// bool = false
// console.log(bool, bool2)

// Let's say we have an array
const players = ['Bob', 'Sarah', 'Ryan', 'Poppy']

// and we want to make a copy of it.
const team = players
// console.log(players, team)

// You might think we can just do something like this:
// team[3] = 'Lux'
// console.log(players, team)

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice()
// console.log(players, team2)
team2[3] = 'Lux'
// console.log(players, team2)

// or create a new array and concat the old one in
team3 = [].concat(players)
// console.log(players, team3)
team3[3] = 'Lux'
// console.log(players, team3)

// or use the new ES6 Spread
team4 = [...players]
// console.log(players, team4)
team4[3] = 'Lux'
// console.log(players, team4)

// now when we update it, the original one isn't changed
team5 = Array.from(players)
// console.log(players, team5)
team5[3] = 'Lux'
// console.log(players, team5)

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Ricardo Almeida',
    age: 80
}

const rick = {
    name: 'Rick',
    age: 100,
    social: {
        twitter: '@twitter',
        facebook: 'facebook'
    }
}

// and think we make a copy:
// const captain = person
// captain.number = 99
// console.log(person, captain)

// how do we take a copy instead?
const captain2 = Object.assign({}, person, { age: 32, number: 99 })
// console.log(person, captain2)
// We will hopefully soon see the object ...spread
const captain3 = { ...person }
// console.log(captain3)

const dev = Object.assign({}, rick)
// dev.social.facebook = 'changed'
// console.log(rick, dev)
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

// Best way do deep clone Objects
const dev2 = JSON.parse(JSON.stringify(rick))
dev2.name = 'changed'
dev2.social.facebook = 'changed'
console.log(rick, dev2)