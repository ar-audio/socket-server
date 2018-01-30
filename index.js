var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var port = process.env.PORT || 3001

io.on('connection', socket => {
  const events = ['position', 'rotation']
  console.log('connect')

  events.forEach(event => {
    socket.on(event, msg => {
      io.emit(event, msg)
    })
  })
})

app.use('/', express.static('./public'))

http.listen(port, () => { console.log('listening on *:' + port) })
