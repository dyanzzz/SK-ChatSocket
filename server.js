var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function(req, res){
    //res.send('<h1>hallo</h1>')
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', function(socket){

    // kalo ada message baru
    socket.on('newMessage', function(msg){
        io.emit('newMessage', msg)
        console.log('chat baru '+msg)
    })

    // kalo user disconnected
    socket.on('disconnec', function(msg){
        console.log('user disconnected')
    })
})

http.listen(3000, function(){
    console.log('listening on port 3000...')
})