function resultadoAluno(nota){
    let notaFinal=arredondaNota(nota)

    if (notaFinal<40){
        return "Aluno Reprovado"
    }else{
        return "Aluno Aprovado"
    }
}

function arredondaNota(nota){
    if (nota % 5 >2){
        return nota + (5 - (nota % 5))
    }else{
        return nota
    }
}

console.log(resultadoAluno(100))
console.log(resultadoAluno(37))
console.log(resultadoAluno(90))
console.log(resultadoAluno(12))
console.log(resultadoAluno(42))
