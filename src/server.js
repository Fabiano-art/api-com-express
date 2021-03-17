const port = 3004;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./db')

app.use(bodyParser.urlencoded({extended: true}));

app.get('/produtos', (req, res, next) => {
    res.send(db.findAll());
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
    res.send(prod)
})

app.listen(port, () => { console.log(`Server is running on port ${port}`) });

