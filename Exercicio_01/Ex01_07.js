function baskara(vl1,vl2,vl3){
    let delta= vl2*vl2-(4*vl1*vl3)

    if (delta<0){
        return "Delta Negativo"
    }

    let x1= (-vl2 + (delta ** 0.5))/(2*vl1)
    let x2=(-vl2 - (delta ** 0.5))/(2*vl1)

    return "O valor de x1 é " + x1.toFixed(2) + " e o valor de x2 " + x2.toFixed(2)

}

console.log(baskara(3,-5,12))