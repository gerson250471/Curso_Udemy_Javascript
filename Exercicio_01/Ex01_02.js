function saberSeTriangulo(ld1,ld2,ld3){
    if (ld1==ld2 && ld2==ld3){
        return "O triangulo com os lados " + ld1 + " , " + ld2 + " e " + ld3 + "  é Equilátero"
    } else if (ld1==ld2 || ld2==ld3 || ld1==ld3) {
        return "O triangulo com os lados " + ld1 + " , " + ld2 + " e " + ld3 + "  é Isósceles"
    } else {
        return "O triangulo com os lados " + ld1 + " , " + ld2 + " e " + ld3 + "  é Escaleno"
    }
}

console.log(saberSeTriangulo(4,4,4))
console.log(saberSeTriangulo(3,3,5))
console.log(saberSeTriangulo(4,5,6))