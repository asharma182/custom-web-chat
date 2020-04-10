"use strict";

const apn = require("apn");

//let tokens = ["c06e9231f0d9d4c448d615fbd51e5227865ce6732e0b438f61b663a1784adfc5"];
module.exports.sendPush = function(tokens){
  console.log(tokens)

  let service = new apn.Provider({
    cert: "cert.pem",
    key: "key.pem",
    passphrase:"",
    // production: true
  });
  
  
  var note = new apn.Notification();
  
  note.expiry = Math.floor(Date.now() / 1000) + 3600;
  note.badge = 0;
  note.sound = "ping.aiff";
  note.alert =     { title: 'Retail.com is currently offering ',
  subtitle: '20% off its annual subscription fee for Loyalty Program' }    
  note.payload =
  { id: '11234567',
    notification_id: '123456789',
    type: 'push',
    title: 'New Promotions',
    intent: 'Promotions' }
  note.topic = "com.oraclecorp.internal.assethub";
  
  console.log(`Sending: ${note.compile()} to ${tokens}`);
  service.send(note, tokens).then( result => {
      console.log("sent:", result.sent.length);
      console.log("failed:", result.failed.length);
      console.log(result.failed);    
  });
  
  service.shutdown();
}
