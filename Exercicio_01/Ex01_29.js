function verSeEstaNoIntervalo(nm1) {
    let intvl = 0
    let intvl2=0
    for (let i = 0; i < nm1.length; i++) {
        if (nm1[i] >= 10 && nm1[i]<=20) {
            intvl++
        } else{
            intvl2++
        }
    }
    console.log(`Na lista temos ${intvl} números dentro do intervalo solicitado e ${intvl2} fora deste intervalo.`)
}

vetor = [1, 2, 3, 4, 5, 6, 11, 15, 25, 27, 34, 44, 66, 88, 99]
verSeEstaNoIntervalo(vetor)