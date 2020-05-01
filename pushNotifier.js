"use strict";

const apn = require("apn");

//let tokens = ["c06e9231f0d9d4c448d615fbd51e5227865ce6732e0b438f61b663a1784adfc5"];
module.exports.sendPush = function (tokens, intent) {
  console.log(tokens)

  var options = {
    cert: __dirname + '/cert.pem',
    key: __dirname + '/key.pem',
    production: true
  };
  var apnConnection = new apn.Connection(options);
  let myDevice = tokens;
  // myDevice.push(tokens)
  //var myDevice = new apn.Device("00bd76584ff6119873e68a2bb2de964011828c32734c88aa4a985b5d37b8b582");
  //var myDevice = new apn.Device("310bc0894b12e7db2fbc64d4717b8a18e1b733ec83a93d112228f7e87105e386","0ca9d6c570107c15b9bbbceed7b2f26fce43660e51e7b0b11b8b3941757efa67");

  var note = new apn.Notification();
  note.expiry = Math.floor(Date.now() / 1000) + 3600;
  note.badge = 0;
  note.sound = "ping.aiff";
  var title = ''
  if (intent.toLowerCase() == 'loyalty') {
    title = '20% OFF Platinum Membership Plans for the next 24 Hours!'
  } else if (intent.toLowerCase() == 'survey') {
    title = 'Would you kindly share your experience with us today?'
  // }
  //  else if (intent.toLowerCase() == 'promotions') {
  //   title = '15% off on all promotions'
  } else if(intent.toLowerCase() == 'pickup') {
    title = 'Your Order is Ready for Pickup! Please come on in at your convenience.'
  }
  note.alert = {
    // "title": "Emergency - Domestic Violence Case",
    // "subtitle": "A Victim Wants to report Case!"
    "title": title,
    //  "subtitle": "15% off on all promotions"
  }
  note.payload =
    {
      id: '11234567',
      notification_id: '123456789',
      type: 'push',
      title: 'New Promotions',
      intent: intent.toLowerCase()
    }
  console.log(note)
  apnConnection.pushNotification(note, myDevice)
  apnConnection.on('error', function (error) {
    console.error('APNS: Initialization error', error);
  });

  // A submission action has completed. This just means the message was submitted, not actually delivered.
  apnConnection.on('completed', function (a) {
    console.log('APNS: Completed sending', a);
  });

}
