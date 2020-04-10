var express = require('express');
var app = express();
var apn = require('apn');

var FCM = require('fcm-node');
var serverKey = 'AIzaSyAR7soGZPPOkDROmH0zXOPlp_rIEVmRomg'; //put your server key here
var fcm = new FCM(serverKey);

const port = process.env.PORT || 7188;
app.get('/', function (req, res) {
  res.send("Go to Hellllllllllllll----------------" + new Date().getTime());
});

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

app.get('/sendpushios', function (req, res) {
  var options = {
    cert: __dirname + '/cert.pem',
    key: __dirname + '/key.pem',
    //production: true
  };
  var apnConnection = new apn.Connection(options);
  let myDevice = ["7866572a1c383d9517f929e102b9b896bd52fbf125af5012a6bc729b2b31a019"];
  //var myDevice = new apn.Device("00bd76584ff6119873e68a2bb2de964011828c32734c88aa4a985b5d37b8b582");
  //var myDevice = new apn.Device("310bc0894b12e7db2fbc64d4717b8a18e1b733ec83a93d112228f7e87105e386","0ca9d6c570107c15b9bbbceed7b2f26fce43660e51e7b0b11b8b3941757efa67");

  var note = new apn.Notification();
  note.expiry = Math.floor(Date.now() / 1000) + 3600;
  note.badge = 0;
  note.sound = "ping.aiff";
  // note.alert = "\uD83D\uDCE7 \u2709 You have a new message";
  // note.payload = { 'messageFrom': 'Caroline' };
  note.alert = {
    "title": "New Win",
    "subtitle": "Control HR Data in the Oracle Autonomous Data Warehouse "
  }
  note.payload = {
    'id': 'WS-9jik65e06c4',
    'notification_id': '3ndl7e1k6az6ljl',
    'type': 'win',
    'title': 'Control HR Data in the Oracle Autonomous Data Warehouse'
  };
  console.log(note)
  apnConnection.pushNotification(note, myDevice)
  apnConnection.on('error', function (error) {
    console.error('APNS: Initialization error', error);
  });

  // A submission action has completed. This just means the message was submitted, not actually delivered.
  apnConnection.on('completed', function (a) {
    console.log('APNS: Completed sending', a);
  });
  return res.json({ success: "true" });
  // res.send("Go to Hellllllllllllll----------------"+new Date().getTime());




});

app.get('/sendpushandroid', function (req, res) {

  var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    // to: 'cSN-HjdAuxs:APA91bEnbnbdbBHhAeLpt24KMpCwuTJDd6z4Rki0BAomsyG2YGJLJZMKce2ySDkq3pPQ2Y9D7yiKp9WPNb-WHUt7Fv6xI5U2PUFKxa2qHKT4dOB52YXOaZ6Uehktl3LDfS1MYXIqX4To',
    // registration_ids: ['cSN-HjdAuxs:APA91bEnbnbdbBHhAeLpt24KMpCwuTJDd6z4Rki0BAomsyG2YGJLJZMKce2ySDkq3pPQ2Y9D7yiKp9WPNb-WHUt7Fv6xI5U2PUFKxa2qHKT4dOB52YXOaZ6Uehktl3LDfS1MYXIqX4To','eaF4TZtaSh4:APA91bG9LWSKlw5DTNJmM9-tlcP9sYk3VEPjmplYQpgScBHbnbAE0pnpWEK8QporEPp4_zDcwVtYf3iPwRlVf_8FRT5BHH21piCcfPyesL1eai9povQ0GjaZmbtS9TWTuFquOK-Ufhtq'],
    registration_ids: ["eipyedP88TA:APA91bHY2onTuxRp2HwdSs2TpGQSmz4O6Y-YqssPitxswTH1QmBAswumzVBdAmqCd2tsRoizNKsY5pog-b-36Nw3kvDQG11ZRJ34yUBhTaoDulQieef85LiXb5w69EPTMQuh0t_GMCRi"],
    //collapse_key: 'your_collapse_key',
    foreground: true,
    notification: {
      title: 'New Asset Added',
      body: 'Control HR Data in the Oracle Autonomous Data Warehouse',
      image: "http://nac-assethub-dev.oracle.com:8001/DRthumbnail-min(1)3nam1tdjzk75lw0.png"
    },

    data: {  //you can send only notification or only data(or include both)
      id: "WS-2k7jzvaaqw8",
      notification_id: '3b6cqzjn6k6jbavqo',
      type: 'Win',
      title: 'Amit Server-New Win Added',
      body: 'Amit Server - Control HR Data in the Oracle Autonomous Data Warehouse'
    }
   
  };

  fcm.send(message, function (err, response) {
    if (err) {
      console.log(message)
      console.log(err);
      return res.json({ error: err });
    } else {
      console.log("Successfully sent with response: ", response);
      return res.json({ success: "true" });
    }
  });
  //return res.json({ success: "true" });
  // res.send("Go to Hellllllllllllll----------------"+new Date().getTime());
});
