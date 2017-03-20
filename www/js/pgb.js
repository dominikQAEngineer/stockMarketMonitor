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