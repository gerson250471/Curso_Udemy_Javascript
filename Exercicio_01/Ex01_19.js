function calculaVenda(produto, qt) {
    switch (produto) {
        case 100:
            return qt * 3
        case 200:
            return qt * 4
        case 300:
            return qt * 5.5
        case 400:
            return qt * 7.5
        case 500:
            return qt * 3.5
        case 600:
            return qt * 2.8
            default:
            return 'Produto não existente.'
    }
}

console.log(calculaVenda(100, 2))
console.log(calculaVenda(200, 2))
console.log(calculaVenda(300, 2))
console.log(calculaVenda(400, 2))
console.log(calculaVenda(500, 2))
console.log(calculaVenda(600, 2))
console.log(calculaVenda(700, 2))
