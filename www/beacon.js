
alert('Beacon plugin');
var exec = require('cordova/exec');
               
exports.custom = function (){
    alert('Custom');
               
               cordova.exec(
                            function callback(data) {
                            // data comes from the NSDictionary instance (jsonObj) from our Objective C code.
                            // Take a look at the cordovaGetFileContents method from FileWriter.m and you'll see
                            // where we add dateStr as a property to that Dictionary object.
                            var msg = 'Current file contents: <br />' + data.dateStr;
                            contentsDiv.innerHTML = msg;
                            },
                            function errorHandler(err) {
                            alert('Error');
                            },
                            'Beacon',
                            'open',
                            [  ]
                            );
               
}