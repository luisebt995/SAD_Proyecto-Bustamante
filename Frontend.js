var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('<h1>Bienvenido</h1>');
});
var server = app.listen(3000, function () {
    console.log('Escuchando peticiones en el puerto 3000');
});

const zmq = require('zeromq')
let s = zmq.socket('rep')
s.bind('tcp://*:9998')
s.on('message', (n) => {
    console.log('Serv1, ' + n)
    switch (n) {
        case 'uno': s.send('one'); break
        case 'dos': s.send('two'); break
        default: s.send('Especifique monto')
    }
})