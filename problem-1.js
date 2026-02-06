function newPrice(currentPrice, discount) {

    if(typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100){
        return "Invalid";
    }

    let price=(currentPrice*discount)/100;
    let calculation=currentPrice-price;
    return calculation.toFixed(3);
}
let output = newPrice(1600,20);
console.log(output);