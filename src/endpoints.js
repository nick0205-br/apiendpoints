
import { Router } from "express"
import { somar, dobro, temperatura, tabuada, media, freqcarac } from "./service.js"
const server = Router();

server.get('/ping', (req, resp) => {
    resp.send('pong');
})

server.get('/dobro/:numero', (req, resp) => {
    try{
        const numero = Number(req.params.numero);

        const d = dobro(numero);
    
        resp.send({
            dobro: d
        })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.get('/somar', (req, resp) => {
    try{
        const a = Number(req.query.a);
        const b = Number(req.query.b);

        const x = somar(a , b)
    
        resp.send({
            soma: x
    })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.post('/somar', (req, resp) => {
    try{
        const { valores: { a, b } } = req.body;

        const x = somar(a , b);
    
        resp.send({
            soma: x
    })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
    
})

server.post('/media', (req, resp) => {
    try{
        const { valores: { a, b, c} } = req.body;

        const x = media(a, b, c);

        resp.send({
            media: x
        })

    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.get('/temperatura', (req, resp) => {
    try{
        const a = Number(req.query.a);

        const x = temperatura(a)
    
        resp.send({
            febre: x
    })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.get('/tabuada', (req, resp) => {
    try{
        const a = Number(req.query.a);

        const x = tabuada(a)
    
        resp.send({
            tabuada: x
    })
    }
    catch(err){
        resp.send({
            erro: err.message
        })
    }
})

server.get('/dia2/corprimaria/:cor', (req, resp) => {
    try{
        const { cor } = req.params;
        const primaria = corPrimaria(cor);
        resp.send({
            primaria: primaria
        });
    }
    catch(err){
        resp.send({
            err:err.message
        })
    }
})

server.post('/dia2/ingressocinema', (req, resp) => {
    try{
        const { qtdInteiras, qtdMeias, diaSemana, nacionalidade } = req.body;
        const total = ingresso(qtdInteiras, qtdMeias, diaSemana, nacionalidade);
        resp.send({
            total: total
        });
    }
    catch(err){
        resp.send({
            err:err.message
        })
    }
})

server.get('/dia2/freqcaractere/:texto/:caractere', (req, resp) => {
    try{
        const { texto, caractere } = req.params;
        const freq = freqcarac(texto, caractere);
        resp.send({
            frequencia: freq
        });
    }
    catch(err){
        resp.send({
            err:err.message
        })
    }
})

server.post('/dia2/maiorNumero', (req, resp) => {
    try{
        const numeros = req.body;
        const maior = maiorNumero(numeros);
        resp.send({
            maior: maior
        });
    }
    catch(err){
        resp.send({
            err:err.message
        })
    }
})

export default server;