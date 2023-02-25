function verMaxEMin(num){
    let nmMax = num[0]
    let nmMin = num[0]
    for (let i = 0; i < num.length; i++) {
        if (num[i] > nmMax) {
            nmMax=num[i]
        } else if (num[i] < nmMin  ){
            nmMin = num[i]
        }
    }
    console.log(`Na lista ${nmMax} é o maior valor e ${nmMin} o menor valor.`)
}

vetor = [58, 2, 3, 114, 5, 6, 11, 15, 225, 27, 34, 44, 66, 88, 99]
verMaxEMin(vetor)