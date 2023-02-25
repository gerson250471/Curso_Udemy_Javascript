function calculaReajuste(plano, salario) {
    switch (plano) {
        case 'A':
            return salario * 1.1
        case 'B':
            return salario * 1.15
        case 'C':
            return salario * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calculaReajuste('A', 1000));
console.log(calculaReajuste('B', 1000));
console.log(calculaReajuste('C', 1000));
console.log(calculaReajuste('D', 1000));
