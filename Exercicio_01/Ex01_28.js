function verSeparOuImpar(nm1) {
    let qtPar = 0
    let qtImpar = 0
    for (let i = 0; i < nm1.length; i++) {
        if (nm1[i] % 2 == 0) {
            qtPar++
        } else {
            qtImpar++
        }
    }
    console.log(`${qtPar} números pares e ${qtImpar} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 11, 23, 25, 27, 34, 44, 66, 88, 99]
verSeparOuImpar(vetor)