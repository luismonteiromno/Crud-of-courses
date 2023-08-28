const express = require("express");

const port = express;

const courses = [
                'Análise e Desenvolvimento de Sistemas', 'Ciências da Computação', 
                'Sistemas da Informação', 'Redes de Computadores'
            ]

port.use(express.json());

port.get('/courses/:id', (req, res) => {
    const { id } = req.params;
    return res.json(courses[id]);
})

port.get('/courses', (req, res) => {
    return res.json(cursos);
})

port.post('/courses', (req, res) => {
    const { body } = req.body;
    return res.json(cursos);
})

port.put('/courses/:id', (req, res) => {
    const { id } = req.params;
    const { body } = req.body;
    return res.json(cursos);
})

port.delete('/courses/:id', (req, res) => {
    const { id } = req.params;
    return res.json(cursos);
})


port.listen(3000);
