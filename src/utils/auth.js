export function setItem(key, value) {
  return localStorage.setItem(key, value)
}
export function getItem(key) {
  return localStorage.getItem(key)
}
export function removeItem(key) {
  return localStorage.removeItem(key)
}

// var a = 1;
// var b = 3;
// console.log(1)

// var a = undefined;
// var gocray =1234
// class Person {
//   constructor(p) {
//     this.name = p.name
//     this.age = p.age
//   }
//   say() {
//     console.log(this.name)
//   }
// }
// class Student extends Person {
//   constructor(go) {
//     super(go)
//     this.fx = go.age
//   }

//   say() {
//     console.log(this.fx)
//   }
// }
// const d1 = new Student({ name: 1, age: 2 })
// d1.say()

// var a = 2;
// if (a > 3) {
//   return a
// }
// function Bdd(a, b) {
//   return a + b
// }
// console.log(Bdd)

function add(...array) {
  return array[0] + array[1]
}
console.log(add.apply([], [1, 2]))
// d1.say = 123
// function doSth(a) {
//   a--;
//   if ( a < 0) {
//     return
//   } else {
//     //        arguments.caller()
//   }
// }

