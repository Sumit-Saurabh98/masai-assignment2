function multiply(a, b){
    return a * b
}

function multiplyWithApply(num1, num2){
    return multiply.apply(null, [num1, num2])
}

console.log(multiply(2, 3))
console.log(multiplyWithApply(2, 3))
