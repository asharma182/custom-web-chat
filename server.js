var path = require('path');
var express = require('express');
var app = express();
var push = require('./pushNotifier.js')
var port  = process.env.PORT || 5000
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var staticPath = path.join(__dirname, '/app');
app.use(express.static(staticPath));

app.get('/sendpush/:token', (req, res) => {
  console.log(req.params.token)
  push.sendPush(req.params.token)
    res.send('Push successfully sent!')
})

app.listen(port, function() {
  console.log('listening on port ' + port );
});

// app.listen( 5000, function() {
//   console.log('listening on port 5000');
// });


