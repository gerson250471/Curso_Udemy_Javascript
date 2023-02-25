function verificaAnoBissesto(ano){
    if (ano<=0){
        return "Falso"
    }else if (ano % 400 == 0){
        return "Verdadeiro"
    }else if(ano % 100 == 0){
        return "Falso"
    }else if(ano % 4 == 0){
        return "Verdadeiro"
    }else{
        return "Falso"
    }
}

console.log(verificaAnoBissesto(2012))
console.log(verificaAnoBissesto(1982))
console.log(verificaAnoBissesto(0))
console.log(verificaAnoBissesto(200))
console.log(verificaAnoBissesto(800))