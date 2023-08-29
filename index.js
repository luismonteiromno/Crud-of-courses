const express = require("express");

const port = express();

const courses = {
    'courses':[
                'Análise e Desenvolvimento de Sistemas', 'Ciências da Computação', 
                'Sistemas da Informação', 'Redes de Computadores'
            ]
        };

port.use(express.json());


port.get('/courses', (req, res) => {
    return res.json(courses);
})

port.post('/courses', (req, res) => {
    const { name } = req.body;
    courses.courses.push(name);

    return res.json(courses);
})

port.get('/courses/:index', (req, res) => {
    const { index } = req.params;
    return res.json({'course': courses.courses[index]});
})

port.put('/courses/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    courses.courses[index] = name;
    return res.json(courses);
})

port.delete('/courses/:index', (req, res) => {
    const { index } = req.params;
    courses.courses.splice(index, 1);
    return res.json({message: 'Curso deletado com sucesso'});
})


port.listen(3000);
