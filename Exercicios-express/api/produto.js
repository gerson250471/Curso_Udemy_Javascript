module.exports = (app,text)=>{
    function salvar(req,res){
        res.send('Produto > Salvo' + text)
    }

    function obter(req,res){
        res.send("Produto > Obter" + text)
    }

    app.post('/produto',salvar)
    app.get('/produto',obter)

    return{salvar,obter}
}