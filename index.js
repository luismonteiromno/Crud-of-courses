const express = require("express");

const port = express();

const courses = [
                'Análise e Desenvolvimento de Sistemas', 'Ciências da Computação', 
                'Sistemas da Informação', 'Redes de Computadores'
            ]

port.use(express.json());

port.get('/courses/:index', (req, res) => {
    const { index } = req.params;
    return res.json(courses[index]);
})

port.get('/courses', (req, res) => {
    return res.json(courses);
})

port.post('/courses', (req, res) => {
    const { body } = req.body;
    return res.json(courses);
})

port.put('/courses/:index', (req, res) => {
    const { index } = req.params;
    const { body } = req.body;
    return res.json(courses);
})

port.delete('/courses/:index', (req, res) => {
    const { index } = req.params;
    return res.json(courses);
})


port.listen(3000);
