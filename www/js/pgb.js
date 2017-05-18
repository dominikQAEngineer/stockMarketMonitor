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

console.log("1");
	$(document).ready(function() {
	console.log("2");
                var symbol='goog';
                var url = 'http://query.yahooapis.com/v1/public/yql';
                                // this is the lovely YQL query (html encoded) which lets us get the stock price:
                                // select * from html where url="http://finance.yahoo.com/q?s=goog" and xpath='//span[@id="yfs_l10_goog"]'
                                var data = "q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3D" + symbol + "%22%20and%20xpath%3D'%2F%2Fspan%5B%40id%3D%22yfs_l10_" + symbol + "%22%5D'&format=json";
                                $.getJSON(url, data, callback);
                var callback = function(data) {
                console.log("3");
                        var price=data.query.results.span[0].content;
                        console.log("4");
                        alert('Stock Price: ' + price);
                        console.log("5");
                    };
        });

}
function makeHttpObject() {
  $(document).ready(function() {
              var symbol='goog';
              var callback = function(data) {
                      var price=data.query.results.span[0].content;
                      alert('Stock Price: ' + price);
                  };

              var url = 'http://query.yahooapis.com/v1/public/yql';
              // this is the lovely YQL query (html encoded) which lets us get the stock price:
              // select * from html where url="http://finance.yahoo.com/q?s=goog" and xpath='//span[@id="yfs_l10_goog"]'
              var data = "q=select%20*%20from%20html%20where%20url%3D%22http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3D" + symbol + "%22%20and%20xpath%3D'%2F%2Fspan%5B%40id%3D%22yfs_l10_" + symbol + "%22%5D'&format=json";
              $.getJSON(url, data, callback);
      });

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

        alert(data);

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
            android: {
                intent: ''  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
};
