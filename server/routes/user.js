const express = require('express');
const User = require('../models/user');
const app = express();

app.get('/usuario', (req, res) => {
    res.json('GET USUARIO');
})

app.post('/usuario', (req, res) => {

    let body = req.body;

    let user = new User({
        name: body.name,
        surname: body.surname,
        email: body.email,
        password: body.password,
        role: body.role
    });

    user.save((err, userDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            user: userDB
        });
    })

})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({ id });
})

app.delete('/usuario', (req, res) => {
    res.json('DELETE USUARIO');
})

module.exports = app;