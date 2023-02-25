function calculaPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calculaPreco(8));
console.log(calculaPreco(15));
console.log(calculaPreco(35));
console.log(calculaPreco(52));
console.log(calculaPreco(80));