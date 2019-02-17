var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var cors = require('cors');


let clientTv = null;
let userPhone = null;

io.on('connection', function (socket) {

    socket.on('connectionTv', () => {
        clientTv = socket.id;
        console.log("Emit");
    });

    socket.on('scanQrCode', () => {
        userPhone = socket.id;
        io.sockets.connected[clientTv].emit('startIntroduction', true);

    });

    socket.on('startIntroduction', () => {
        if (clientTv.length) {

        } else {
            //io.sockets.connected[clientTv].emit('startIntroduction', true);
        }
    });

    socket.on('disconnect', function () {
        if (clientTv === socket.id) {
            clientTv = null
        }
    });


});


var port = process.env.PORT || 5000;

http.listen(port, function () {
    console.log('Serveur ouvert sur le port :' + port);
});
