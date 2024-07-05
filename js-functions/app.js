// console.log('hi')

function sayHello() {
    console.log("hello")
}

function sayHelloTo(userName) {
    console.log("Hello " + userName)
}

sayHelloTo("riley")

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

// const result = add(6, 8)
// console.log("The result is ", result)

// const mResult = multiply(4, 13)
// console.log("The result is ", mResult)

// const sResult = subtract(87, 34)
// console.log("The result is ", sResult)

// const dResult = divide(81, 9)
// console.log("The result is ", dResult)

// function calculate(a, b, operator) {
//     if (operator === "+") {
//         return add(a, b)
//     } else if (operator === "-") {
//         return subtract(a, b)
//     } else if (operator === "*") {
//         return multiply(a, b)
//     } else if (operator === "/") {
//         return divide(a, b)
//     }
// }

function calculate(a, b, operator) {
    switch (operator){
    case "+":
        return add(a, b)
    case "-":
        return subtract(a, b)
    case "*":
        return multiply(a, b)
    case "/":
        return divide(a, b)
}
}

const result = calculate()
console.log("The result is ", result)