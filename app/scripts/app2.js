!function(e,t,n,r){
    function s(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var n=t.getElementsByTagName("script")[0],r=t.createElement("script");r.async=!0,r.src=e.url,n.parentNode.insertBefore(r,n)}}catch(e){}}var o,p,a,i=[],c=[];e[n]={init:function(){o=arguments;var e={then:function(t){return c.push({type:"t",next:t}),e},catch:function(t){return c.push({type:"c",next:t}),e}};return e},on:function(){i.push(arguments)},render:function(){p=arguments},destroy:function(){a=arguments}},e.__onWebMessengerHostReady__=function(t){if(delete e.__onWebMessengerHostReady__,e[n]=t,o)for(var r=t.init.apply(t,o),s=0;s<c.length;s++){var u=c[s];r="t"===u.type?r.then(u.next):r.catch(u.next)}p&&t.render.apply(t,p),a&&t.destroy.apply(t,a);for(s=0;s<i.length;s++)t.on.apply(t,i[s])};var u=new XMLHttpRequest;u.addEventListener("load",s),u.open("GET",r+"/loader.json",!0),u.responseType="json",u.send()
}(window,document,"Bots", "https://custom-web-chat.herokuapp.com/bots-client-sdk-js");

function loadAppId(){
    var appId = '5ec66d8e52877e000f39d744'// window.localStorage.getItem("appId");
    if(appId){
        document.getElementById("appId").value = appId;
    }
}
// console.log(window.location.href.split('?')[1].split('=')[1])
var d= window.location.href.split('?')[1]
var firstname = d.split('&')[0].split('=')[1]
var lastname = d.split('&')[1].split('=')[1]
var intent = d.split('&')[2].split('=')[1]
window.localStorage.setItem('intent', intent);

function saveAppId(e){
    // window.localStorage.setItem('myCat', 'Tom');
    e.preventDefault();
    let appId = '5ec66d8e52877e000f39d744'//document.getElementById("appId").value;
    console.log('Validate appId', appId);
    // validate app id
    initBots(appId)
        .then(function () {
            console.log('AppId is valid');
            window.localStorage.setItem("appId", appId);
            window.location.href = "home.html";
            document.getElementById("loader").style.display = "none";
        })
        .catch(function (err) {
            document.getElementById("loader").style.display = "none";
            document.getElementsByClassName("error")[0].style.display = 'block';
            console.log('AppId validating error', err);
        });

}


function loadChat(e){
     e.preventDefault();
    console.log('Init Bots SDK');
    var appId = '5ec66d8e52877e000f39d744'//window.localStorage.getItem("appId");
    initBots(appId)
        .then(function () {
            console.log("init complete");
            document.getElementById("loader").style.display = "none";
            Bots.open();
            document.getElementById("openChatButton").setAttribute("disabled", true)
        })
        .catch(function (err) {
            console.log(err);
        });
}

function clearChat(e){
    e.preventDefault();
    var keys = Object.keys(localStorage);
    for(var i = 0; i < keys.length; i++){
        if(keys[i] === 'appId'){
            continue;
        }
        localStorage.removeItem(keys[i]);
    }
    location.reload();
}


function initBots(appId){
    return Bots.init({
        appId: appId,

        // locale: 'en-US',
        // soundNotificationEnabled: true,
        // imageUploadEnabled: true,
        // displayStyle: 'button',
        // buttonIconUrl: '/images/logo-nh-coalition-round.png',
        // buttonWidth: '58px',
        // buttonHeight: '58px',
        // businessName: 'NH Coalition',
        businessIconUrl: '/images/logo-nh-coalition-round.png',
        
        customColors: {
            brandColor: '37b359',
            conversationColor: 'e4862c',
             actionColor: 'e4862c',
        },

        customText: {
            // actionPostbackError: 'An error occurred while processing your action. Please try again.',
            // clickToRetry: 'Message not delivered. Click to retry.',
            // conversationTimestampHeaderFormat: 'MMMM D YYYY, h:mm A',
            // fetchHistory: 'Load more',
            // fetchingHistory: 'Retrieving history...',
            headerText: 'NH Coalition, How can we help?',
            // inputPlaceholder: 'Type a message...',
            // invalidFileError: 'Only images are supported. Choose a file with a supported extension (jpg, jpeg, png, gif, or bmp).',
           // introductionText: 'Mobile Cloud Enterprise',
            // locationNotSupported: 'Your browser does not support location services or it’s been disabled. Please type your location instead.',
            // locationSecurityRestriction: 'This website cannot access your location. Please type your location instead.',
            // locationSendingFailed: 'Could not send location',
            // locationServicesDenied: 'This website cannot access your location. Allow access in your settings or type your location instead.',
            // messageError: 'An error occurred while sending your message. Please try again.',
            // messageIndicatorTitlePlural: '({count}) New messages',
            // messageIndicatorTitleSingular: '({count}) New message',
            // messageRelativeTimeDay: '{value}d ago',
            // messageRelativeTimeHour: '{value}h ago',
            // messageRelativeTimeJustNow: 'just now',
            // messageRelativeTimeMinute: '{value}m ago',
            // messageTimestampFormat: 'hh:mm A',
            // messageSending: 'Sending...',
            // messageDelivered: 'Delivered',
            // sendButtonText: 'Send',
            // settingsHeaderText: 'Settings',
            // tapToRetry: 'Message not delivered. Tap to retry.',
            // unsupportedMessageType: 'Unsupported message type.',
            // unsupportedActionType: 'Unsupported action type.'
        }
    }).then(function (res){
        Bots.updateUser(
            {
                "givenName": firstname, 
                "surname": lastname, 
                "email": "abhishek.sharma@winterfell.com", 
                "properties": { 
                    "smoochCustomVariable1":"Lord", 
                    "smoochCustomVariable2":"Commander"
                }
            }
        ).catch(function (err) {
            console.error(err);
        });
    });
}