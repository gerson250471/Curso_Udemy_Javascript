function fatorial(vl){
    res=1
    for(i=vl;i>0;i--){
        res=res * i
    }
    return "O fatorial de " + vl + " é igual a: " + res
}

console.log(fatorial(5))
