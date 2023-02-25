let pontosObtidos="30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function desempenho(pontosObtidos){
    let pontos=pontosObtidos.split(", ")
    let record = 0
    let piorjogo = 1
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]

    for (let i=0;i < pontos.length;i++){
        if(pontos[i] > maiorPontuacao){
            maiorPontuacao = pontos[i]
            record++
        }else if(pontos[i] < menorPontuacao){
            menorPontuacao = pontos[i]
            piorjogo = i + 1
        }
    }

    return [record,piorjogo]
}

console.log(desempenho(pontosObtidos))