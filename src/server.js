const port = 3003;
const express = require('express');
const app = express();

const db = require('./db')

app.get('/produtos', (req, res, next) => {
    res.send(db.findAll);
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.findById(req.params.id));
})

app.post('/produtos/', (req, res, next) => {
    const prod = {
        nome: req.body.nome,
        preco: req.body.preco
    }
    db.save(prod);
})

app.listen(port, () => { console.log(`Server is running on port ${port}`) });

