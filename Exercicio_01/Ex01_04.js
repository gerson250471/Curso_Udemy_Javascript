function resDivisao(vl1,vl2){
    let div= Math.floor ( vl1/vl2)
    let res=vl1%vl2

    console.log ("Resultado de " + vl1 + "/" + vl2 + " = " + div)
    console.log (`tem resto ${res}`)

}

resDivisao(10,3)
