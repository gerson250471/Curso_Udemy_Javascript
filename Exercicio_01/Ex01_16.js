function calcular (vl1, op, vl2) {
    switch (op) {
        case '+':
            return vl1 + vl2
        case '-':
            return vl1 - vl2
        case '*':
            return vl1 * vl2
        case '/':
            return vl1 / vl2
        default:
            return 'Operação inválida'
    }
}

console.log(calcular(2, '+', 3));
console.log(calcular(2, '-', 3));
console.log(calcular(2, '*', 3));
console.log(calcular(2, '/', 3));
console.log(calcular(2, 'a', 3));
