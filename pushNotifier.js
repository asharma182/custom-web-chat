"use strict";

const apn = require("apn");
var fs = require('fs');
// fs.readFile('./cert.pem', (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   console.log(data)
// })
//let tokens = ["c06e9231f0d9d4c448d615fbd51e5227865ce6732e0b438f61b663a1784adfc5"];
module.exports.sendPush = function(tokens){
  console.log(tokens)

  var options = {
    cert: './cert.pem',
    key: './key.pem',
   // production: true
  };
  var apnConnection = new apn.Connection(options);
  let myDevice = ["0701e8b2212aef33448b6442b3130df151bd38f9c3010daa46f93f77c5c4cf2a"];
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
}
