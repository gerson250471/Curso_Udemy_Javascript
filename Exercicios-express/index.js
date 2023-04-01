const express = require('express')
const app = express()
const bodyParser=require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi=require('./api/usuario')
require('./api/produto')(app,' com parametros!')


app.post('/usuario',usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(saudacao('Gerson Bernardo'))


app.use((req,res,next)=>{
    console.log('Antes...')
    next()
})

app.get(`/clientes/relatorio`,(req,res)=>{
res.send(`O Relatório do Cliente: completo ${req.query.completo} ano ${req.query.ano}`)
})


app.post('/corpo',(req,res)=>{
    // let corpo=''
    // req.on('data',function(parte) {
    //     corpo += parte
    // })

    // req.on('end',function(){
    //     res.send(corpo)
    // })
    res.send(req.body)
})

app.get('/clientes/:id',(req,res)=>{
    res.send(`Cliente ${req.params.id} selecionado`)
})

app.get('/gb',(req,res,next) => {
    
    console.log('durante...')

    res.json({
        
        data: [
        {id:7,Nome:'Ana', Posição:1},
        {id:34,Nome:'Bia', Posição:2},
        {id:73,Nome:'Carlos', Posição:3}
    ],
        Count: 30,
        Skip: 0,
        Limit: 3,
        status: 200
    })

    next()

    // res.json({
    //    Nome:'Ipad 32Gb',
    //    Preço:1899.00,
    //    Desconto:0.12
    // })
    
    // res.send('Estou <b>bem!</b>')
})

app.use('/gb',(req,res)=>{
    console.log('Depois...')
})

app.listen(3000,() =>{
    console.log('Back end da minha página está rodando GERSON  BERNARDO. . .')
})