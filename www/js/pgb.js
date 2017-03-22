function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}
function personalInfo() {

	info =  'Hi, I am your programmer :-)'   + '\n' +
			'====='                          + '\n' +
			'My name is Dominik'             + '\n' +
			'My project colleague is Ola'    + '\n' +
			'We ain\'t know shit about mobile project'+'\n' +
			'I hope we\'ll pass'             + '\n' +
			'Please help'+ '\n' +
			'This is my message *crying for help*'+'\n';

	navigator.notification.alert(info);

}
function checkConnection() {

	var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        alert('Connection type: ' + states[networkState]);

}
function onSuccess(acceleration) {
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');


}

function onError() {
    alert('onError!');
}
function checkAcceleration(){
navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}


function contactSuccess(contacts) {

    for(var i=0;i<contacts.length;i++)
    alert('Nazwa:'+contacts[i].displayName+', Numer:'+contacts[i].phoneNumbers[0].value);
};

function contactError(contactError) {
    alert('onError!');
};

function showContacts(){
var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
navigator.contacts.find(fields, contactSuccess, contactError);
};

var app = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
//            android: {
//                intent: 'INTENT'  // send SMS with the native android SMS messaging
//                //intent: '' // send SMS without open any other app
//            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
};
