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

<<<<<<< HEAD
    });

    socket.on('startIntroduction', () => {
        if (clientTv.length) {

        } else {
            //io.sockets.connected[clientTv].emit('startIntroduction', true);
        }
=======

    socket.on('isereView', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('isereView', true);
    });
    socket.on('isereHasRead', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        console.log("COuCOu");
        io.emit('isereHasRead', true);
    });
    socket.on('movingIntroduction', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('movingIntroduction', true);
    });
    socket.on('turnIntroduction', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('turnIntroduction', true);
    });
    socket.on('upIntroduction', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('upIntroduction', true);
    });
    socket.on('stopIntroduction', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('stopIntroduction', true);
    });

    socket.on('understandIntroduction', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('understandIntroduction', true);
    });

    socket.on('understandIntroduction', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('understandIntroduction', true);
    });
    socket.on('letsGoIntroduction', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('letsGoIntroduction', true);
    });
    socket.on('letsGoIntroduction', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('letsGoIntroduction', true);
    });

    socket.on('letsGoIntroduction', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('letsGoIntroduction', true);
    });
    socket.on('chooseLandscape', (data) => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('chooseLandscape', data);
    });
    socket.on('confirmLandscape', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('confirmLandscape', true);
    });
    socket.on('closeLandscape', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('closeLandscape', true);
    });
    socket.on('loadDrone', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('loadDrone', true);
    });
    socket.on('startDrone', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('startDrone', true);
    });
    socket.on('stopByUserDrone', () => {
        // io.sockets.connected[clientTv].emit('isereView', true);
        io.emit('stopByUserDrone', true);
>>>>>>> dfdf7f36be40e4e34a59c1d9142a556b786e65dc
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
