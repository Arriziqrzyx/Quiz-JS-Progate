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
