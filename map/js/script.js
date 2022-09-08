const myMap = new Map();

myMap.set('a', 1)
myMap.set('b', 3)

console.log(myMap.get('a'))
console.log(myMap.get('b'))
console.log(myMap.size)


//lesson task

const users = new Map();

users.set(12, {
    firstName: "Ola",
    lastName: "Nordmann"
})
console.log(users.size)
users.set(50, {
    firstName: "Kari",
    lastName: "Nordmann"
})
console.log(users.size);
users.delete(12)
console.log(users.size);
