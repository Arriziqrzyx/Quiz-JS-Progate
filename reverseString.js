let kata1 = "hello";
let kata2 = "world";

const reverseString = (str) => {
    return str.split('').reverse().join('');
};

console.log(`Kebalikan nya ${kata1} adalah: ${reverseString(kata1)}`);
console.log(`Kebalikan nya ${kata2} adalah: ${reverseString(kata2)}`);

