function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
	var options = { frequency: 1000 };  // Update every 3 seconds
    var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

function onDeviceReady() {
	navigator.notification.beep(1);
	console.log(navigator.accelerometer);
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
