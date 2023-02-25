function verQtNumNegativo(num){
    let nmNeg = 0
    for (let i = 0; i < num.length; i++) {
        if (num[i] < 0) {
            nmNeg++
        } 
    }
    console.log(`Na lista temos  ${nmNeg} numeros negativos.`)
}

vetor = [-58, 2, 3, -114, 5, 6, -11, 15, -225, 27, 34, 44, 66, 88, 99]
verQtNumNegativo(vetor)