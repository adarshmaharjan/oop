# Object Oriented Programming

The basic idea of OOP is that we use objects to model real world things that we want to represent inside our programs, and/or provide a simple way to access functionality that would otherwise be hard or impossible to make use of

Objects can contain related data and code, which represents information about the thing you are trying to model, and functionality or behavior that you want it to have. Object data can be stored neatly inside an object package, making it easy to structure and access objects are also commonly used as data stores that can be easily sent across the network

We can create person object type or class which defines the generic model of the person which contains generic data of the person. There a re lots of thing we could define about the person for example we could know about his/her age, gender, name, preference, DNA profile, Blood Group, ansistory,  place , etc.For simple model we just need our model to be able to describe a person so that we can introduce to him so we only select the necessary data to describe a person and this is one the feature of the OOP which is known as **Abstraction** 

After the creation of the class we can now create a description of the actual person from the model with the help giving data to the properties of the model or class which is called object instance

When object instance is created the constructor function runs to create ity which is known as instantiation

As we know that the a person can be any body in the world i.e teacher, student, hitman, developer, sleeper etc the person model or class isn't too specific to differentiate diffrent type of people based on their specific functionality , job , preference etc.
So can crete a new model of the which will be a subset of the person model which we can call subclass or inherited class as the all the properties of the person model is inherited bey it's sub class. The class person object can also be called a parent class or super class as it will be the boss and give its all properties of the inheritance to subclasses like teacher, student, hitman, counter-terrorist etc.
The change in the parent class will affect all the functionality and property in its inherited class

After the inheritance most of the feature and properties of the sub classes will be similar to each other as they are inherited from the same parents but the sup class will also has its own property and can also have its inherited property diffrent form other which is one of the feature of OOP called **Polymorphism**

And now we can create object instances from child classes 

---
## Construction and object instances

In this blog I  will be using javascript for representation of the OOP. Javascript uses a special constructor function to define and initialize objects and their feature in es5 while it uses class with it's constructor function  to define and create objects in es6

## A simple Example

Lets start how we could define a person using a normal function 
```
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
```

But the seems a little long because we always have to create a object and return so the javascript has a shortcut for us in the form of constructor function

```
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
```

The constructor function is JavaScript's version of a class. Notice that it has all the features you'd expect in a function, although it doesn't return anything or explicitly create an object it basically just defines properties and methods. Its general convention to define constructor function with the capital letter

---

## Main principals of OOP

- Inheritance
- Encapsulation
- Polymorphism
- Abstraction
  
### Inheritance
Objects are very often similar. They share common logic but they are not entirely .We can use the common feature without needing to create new feature which can be achieved with the help of the inheritance
```
// parent class

class Person{
    constructor(name){
        this.name = name
    }
}

// child class

class Student extends person{
    constructor(name,id){
        super(name)
        this.id = id
    }
}
```

### Encapsulation
The process of wrapping properties and function within a single unit is known as encapsulation.Encapsulation is achieved when each objects keeps its states private inside a class.Other object don't have a direct access to this state.
```
class Person{
    constructor(name,id){
        this.name = name
        this.id = id
    }
    add_address(add){
        this.add = add
    }
    getDetails(){
        console.log(`Name: ${this.name}, Address: ${this.address}`)
    }
    let person1 = new Person('ram', 21)
    person1.add_address("Nepal")
    person1.getDetails()
}
```
### Polymorphism
The ability of the multiple objects types to implement the same functionality is known as polymorphism.It provides us the ability to call the same method and get diffrent result in diffrent objects
```
class A{
    display(){
        console.log("Hello from A")
    }
}
class B extends A{
    display(){
        console.log("Hello from B")
    }
}

```

### Abstraction

Abstraction can be thought as natural extension of the encapsulation.Abstraction is a concept aiming to ease this problem.Applying abstraction means that each object should only expose a high-level mechanism for using it.

---

## Use Cases

The use cases of the OOP is very vast and some of its use cases are as follows:

- Client-server system
- Object-oriented database
- Real-time System design
- Simulation and modeling
- Hypertext and Hypermedia
- Neural networking and Parallel Programming
- Office Automation System
- AI system
- other





