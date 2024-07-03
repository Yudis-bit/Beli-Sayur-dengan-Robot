// suruh robot beli tahu berapa jumlah sayuran yang bisa dibeli sesuai dengan uang yang diberikan 
// 14 = harga sayuran dalam $

function beliSayur(uang){
    var hitungBelanja = Math.floor(uang / 14);
    console.log("Dengan uang " + uang +"$, Robot bisa membeli " + hitungBelanja + " sayuran");
}


beliSayur(50);
