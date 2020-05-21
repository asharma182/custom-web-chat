var path = require('path');
var express = require('express');
var app = express();
var push = require('./pushNotifier.js')
var port  = process.env.PORT || 5000
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var staticPath = path.join(__dirname, '/app');
app.use(express.static(staticPath));

app.get('/sendpush', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/push.html'));
  // console.log(req.params.token)
  // push.sendPush(req.params.token)
  //   res.send('Push successfully sent!')
})

app.get('/transitionhouse', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/transitionhouse.html'));
  // console.log(req.params.token)
  // push.sendPush(req.params.token)
  //   res.send('Push successfully sent!')
})
app.get('/covid19help', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/covid19help.html'));
  // console.log(req.params.token)
  // push.sendPush(req.params.token)
  //   res.send('Push successfully sent!')
})
app.get('/nhcoalition', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/nhcoalition.html'));
  // console.log(req.params.token)
  // push.sendPush(req.params.token)
  //   res.send('Push successfully sent!')
})

app.post('/sendpush',urlencodedParser, (req, res) => {
  // res.sendFile(path.join(__dirname + '/app/push.html'));
  console.log(req.body)
  push.sendPush(req.body.devicetoken, req.body.intent )
    res.send('Push successfully sent!')
})


app.get('/sendpush/:token', (req, res) => {
  // res.sendFile(path.join(__dirname + '/app/push.html'));
  console.log(req.params.token)
  push.sendPush(req.params.token, 'loyalty')
    res.send('Push successfully sent!')
})

app.listen(port, function() {
  console.log('listening on port ' + port );
});

// app.listen( 5000, function() {
//   console.log('listening on port 5000');
// });


