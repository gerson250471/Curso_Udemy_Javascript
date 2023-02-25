function caixaEletronico(saque) {
    let cont100 = 0
    let cont50 = 0
    let cont10 = 0
    let cont5 = 0
    let cont1 = 0
    let valor = calcularNota(saque)
    while (valor >= valor) {
        switch (valor) {
            case 100:
                saque -= 100
                cont100++
                break
            case 50:
                saque -= 50
                cont50++
                break
            case 10:
                saque -= 10
                cont10++
                break
            case 5:
                saque -= 5
                cont5++
                break
            case 1:
                cont1++
                saque -= 1
                break
        }

        valor = calcularNota(saque)

    }
    return resultado(cont100, cont50, cont10, cont5, cont1)
}

function calcularNota(saque) {
    if (saque >= 100) {
        return 100
    } else if (saque >= 50) {
        return 50
    } else if (saque >= 10) {
        return 10
    } else if (saque >= 5) {
        return 5
    } else if (saque >= 1) {
        return 1
    }
}

function resultado(cont100, cont50, cont10, cont5, cont1) {
    let resultado = ''

    if (cont100 > 0) {
        resultado += `${cont100} nota(s) de R$ 100. `
    }

    if (cont50 > 0) {
        resultado += `${cont50} nota(s) de R$ 50. `
    }

    if (cont10 > 0) {
        resultado += `${cont10} nota(s) de R$ 10. `
    }

    if (cont5 > 0) {
        resultado += `${cont5} nota(s) de R$ 5. `
    }

    if (cont1 > 0) {
        resultado += `${cont1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(caixaEletronico(97));
