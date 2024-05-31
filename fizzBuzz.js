let k3 = 6;
let k5 = 10;
let k3dan5 = 15;

const fizzBuzz = (angka) => {
    let output = "";
    switch (true) {
        case angka % 3 === 0 && angka % 5 === 0:
            output = "FizzBuzz";
            break;
        case angka % 3 === 0:
            output = "Fizz";
            break;
        case angka % 5 === 0:
            output = "Buzz";
            break;
        default:
            output = "bukan kelipatan 3 atau 5";
    }
    return output;
};

console.log(`Kelipatan 3 = ${fizzBuzz(k3)}`);
console.log(`kelipatan 5 = ${fizzBuzz(k5)}`);
console.log(`kelipatan 3 dan 5 = ${fizzBuzz(k3dan5)}`);
