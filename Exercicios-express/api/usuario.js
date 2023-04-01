function salvar(req,res){
    res.send('Usuario > Salvo')
}

function obter(req,res){
    res.send('usuario > Obter')
}

module.exports={salvar,obter}