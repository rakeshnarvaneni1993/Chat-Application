var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){

  socket.on('add-message', function(message){
    io.emit('message', {type:'new-message', text: message});
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
