var path = require('path');
var express = require('express');
var app = express();
var push = require('./pushNotifier.js')
var port = process.env.PORT || 5000
var bodyParser = require('body-parser')


var mongoose = require('mongoose');
mongoose.connect('mongodb://omh:OMHisAw3s0m3@b.oretail.cloud:27017/omh');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("connection established");
});

var newUser = new mongoose.Schema({
  username: String,
  deviceid: String
});

var User = mongoose.model('NewUser', newUser)


var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json());

app.use(function (req, res, next) {
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
app.get('/nhcoalition', (req, res) => {
  res.sendFile(path.join(__dirname + '/app/nhcoalition.html'));
  // console.log(req.params.token)
  // push.sendPush(req.params.token)
  //   res.send('Push successfully sent!')
})

app.post('/sendpush', urlencodedParser, (req, res) => {
  console.log(req.body)
  var deviceToken = []
  var emails = req.body.email.length != 0 ? req.body.email.split(",") : ''
  if (emails.length != 0) {
    emails.forEach((e, i) => {
      User.find({ username: e.trim() }, (err, user) => {
        console.log(user)
        if (err) return console.error(err);
        if (user.length != 0) {
          user.forEach((it, i) => {
            deviceToken.push(it.deviceid)
          })
        }
        push.sendPush(deviceToken, req.body.intent)
      })

    })
  } else {
    User.find({}, (err, user) => {
      console.log(user)
      if (err) return console.error(err);
      user.forEach((it, i) => {
        deviceToken.push(it.deviceid)
      })
      push.sendPush(deviceToken, req.body.intent)
    })

  }

  // res.sendFile(path.join(__dirname + '/app/push.html'));

  res.send('Push successfully sent!')
})


app.get('/sendpush/:token', (req, res) => {
  // res.sendFile(path.join(__dirname + '/app/push.html'));
  console.log(req.params.token)
  push.sendPush(req.params.token, 'loyalty')
  res.send('Push successfully sent!')
})

app.post('/adduser', (req, res) => {
  // res.sendFile(path.join(__dirname + '/app/push.html'));

  User.find({ username: req.body.username }, (err, user) => {
    console.log(user)
    if (err) return console.error(err);
    if (user.length == 0) {
      var new_user = new User({
        username: req.body.username,
        deviceid: req.body.deviceId
      });

      new_user.save(function (err, user) {
        if (err) return console.error(err);
        res.send('New user created')
      });
    } else {
      res.send('User already present')
    }

  })


  // push.sendPush(req.body.devicetoken, req.body.intent )

})


app.listen(port, function () {
  console.log('listening on port ' + port);
});

// app.listen( 5000, function() {
//   console.log('listening on port 5000');
// });


