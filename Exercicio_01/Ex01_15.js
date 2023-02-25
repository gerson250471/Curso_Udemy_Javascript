function compraCarro(escolha){
    switch (escolha) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log(compraCarro('hatch'));
console.log(compraCarro('motocicleta'));
console.log(compraCarro('sedan'));
console.log(compraCarro('caminhonete'));
console.log(compraCarro('jetski'));