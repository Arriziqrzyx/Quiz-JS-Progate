let angka1 = [10, 20, 30, 40, 50];
let angka2 = [16, 32, 64, 128, 256];

const secondLargest = (arr) => {
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }

    return secondMax;
};

console.log("angka1: " + secondLargest(angka1)); 
console.log("angka2: " + secondLargest(angka2)); 
