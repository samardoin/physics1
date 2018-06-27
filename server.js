var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

users=[];
connections=[];

server.listen(process.env.PORT || 8080);
console.log("server running");

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
  app.use(express.static('client'));
});

io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected:  sockets connected', connections.length);

  socket.on('disconnect', function(data){
    console.log('Disconnected:  sockets connected',connections.length);
  });

});