function formataValor(vl1){
    valor=`R$ ${vl1.toFixed(2).toString().replace(".",",")}`
    console.log(valor)
}

formataValor(0.22+0.08)
