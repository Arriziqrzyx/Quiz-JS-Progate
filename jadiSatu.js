// ---------------- Reverse String

let kata1 = "hello";
let kata2 = "world";

const reverseString = (str) => {
    return str.split('').reverse().join('');
};

console.log(`Kebalikan nya ${kata1} adalah: ${reverseString(kata1)}`);
console.log(`Kebalikan nya ${kata2} adalah: ${reverseString(kata2)}`);


// ---------------- Fizz Buzz

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



// ----------------Second Large

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

// -------------------------- Quiz Product

let produk = [
    { id: 1, nama: 'Produk A', harga: 1000, poin: 10 },
    { id: 2, nama: 'Produk B', harga: 2000, poin: 25 },
    { id: 3, nama: 'Produk C', harga: 5000, poin: 50 },
    { id: 4, nama: 'Produk D', harga: 8000, poin: 100 },
];
let poinTersedia = 150;

const dapatkanProdukDenganPoinMaksimal = () => {
    const produkTerurut = produk.sort((a, b) => b.poin - a.poin);
    return produkTerurut[0];
};

const hitungPoinTersisa = () => {
    const produkPoinMaksimal = dapatkanProdukDenganPoinMaksimal();
    const poinTersisa = poinTersedia - produkPoinMaksimal.poin;
    return poinTersisa;
};

const tukarProduk = () => {
    const produkTerurut = produk.sort((a, b) => b.poin - a.poin);
    let poinTersisa = poinTersedia;
    let produkDibeli = [];
    let totalDibayar = 0;

    for (let item of produkTerurut) {
        if (poinTersisa >= item.poin) {
            produkDibeli.push(item);
            totalDibayar += item.harga;
            poinTersisa -= item.poin;
        } else {
            break; 
        }
    }

    return { produkDibeli, totalDibayar };
};


console.log("Produk dengan poin maksimal:", dapatkanProdukDenganPoinMaksimal());
console.log("Poin tersisa setelah membeli produk dengan poin maksimal:", hitungPoinTersisa());
console.log("Produk yang ditukar:", tukarProduk());
