var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var port = process.env.PORT || 3000

io.on('connection', socket => {
  const events = ['position', 'rotation']

  events.forEach(event => {
    socket.on(event, msg => { io.emit(event, msg) })
  })
})

http.listen(port, () => { console.log('listening on *:' + port) })
