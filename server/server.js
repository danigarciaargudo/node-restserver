require('./config/config');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', (req, res) => {
    res.json('GET USUARIO');
})

app.post('/usuario', (req, res) => {

    let usuario = req.body;

    if (usuario.nombre === undefined) {
        res.status(400).json({
            ok: false,
            message: 'El nombre es obligatorio'
        })
    } else {
        res.json({ usuario });
    }
})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id });
})

app.delete('/usuario', (req, res) => {
    res.json('DELETE USUARIO');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});