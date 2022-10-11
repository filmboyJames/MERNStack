module.exports = {
    factorial
}

function factorial(num) {
    let divider = 1;
    let numDivide = num;
    while (numDivide > 1) {
        divider++;
        if (numDivide % divider !== 0) {
            return "NOT A";
        }
        else {
            numDivide = numDivide / divider;
        }
    }
    return divider;
}

console.log("3628800 is ",factorial(3628800), "!");
console.log("479001600 is ",factorial(479001600), "!");
console.log("6 is ",factorial(6), "!");
console.log("18 is ",factorial(18), "!");