// create person with name and greeting using normal function
function createPerson(name) {
    const obj = {}
    obj.name = name
    obj.greeting = function () {
        console.log("Hello " + obj.name)
    }
    // console.log(obj) now
    return obj
}
// instantiation of the person name ram using the normal function
const ram = createPerson("ram")
console.log(ram) // {name:ram, greeting:function}
console.log(ram.name) // ram
console.log(ram.greeting()) // Hello ram

// creation of the person class using a constructor function
function Person(name) {
    this.name = name
    this.greeting = function () {
        console.log("Hello " + this.name)
    }
}
// instantiation of the person name ram using the constructor function
const person1 = new Person("ram")
const person2 = new Person("ritesh")
console.log(person1.name) // ram
console.log(person2.name) // ritesh
