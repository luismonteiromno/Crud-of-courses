const express = require("express");

const port = express();

const courses = {
    'courses':[
                'Análise e Desenvolvimento de Sistemas', 'Ciências da Computação', 
                'Sistemas da Informação', 'Redes de Computadores'
            ]
        };

const users = {
    'users': []
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

port.get('/users', (req, res) => {
    return res.json(users);
})

port.post('/users', (req, res) => {
    const { name } = req.body;
    users.users.push(name);

    return res.json(users);
})

port.get('/users/:index', (req, res) => {
    const { index } = req.params;
    return res.json({'users': users.users[index]});
})

port.put('/users/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users.users[index] = name;
    return res.json(courses);
})

port.delete('/users/:index', (req, res) => {
    const { index } = req.params;
    users.users.splice(index, 1);
    return res.json({message: 'Curso deletado com sucesso'});
})



port.listen(3000);
