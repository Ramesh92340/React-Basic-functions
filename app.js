// to print hello world

// var http = require("http");

// http.createServer (function (req,res){
//     res.write("helo world")
//     res.end();
// }).listen(3001);





// to print url function

// var http = require("http");

// http.createServer(function(req,res){
//     res.write(req.url);
//     res.end();
// }).listen(3030);






// linking up modual

// var http = require ("http");
// var time = require ("./modual.js");

// http.createServer(function(req,res){
//     res.write("Now you can see date and time " + time.time());
//     res.end();
// }).listen(3090);    






// split the query string


// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);








// file system

// read file 

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req,res){
//     fs.readFile("demofile.html",function(err,data){
//         res.write(data);
//         res.end();
//     });
// }).listen(3050);




// append fle 

// var fs = require  ('fs');

// fs.appendFile('mynewfile1.txt','hello content' ,function(err){

//     if (err)throw err;
//     console.log('hello');
// });



// open new file 

// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function(err,file){
//     if (err) throw err;
//     console.log('saved');
// });



// writefile 

// var fs = require('fs');

// fs.writeFile('mynewfile3.txt','hello content .... ',function(err ,file){
//     if(err) throw err;
//     console.log('saved');
// })



// update 

// append

// var fs = require ('fs');

// fs.appendFile('mynewfile1.txt','this is my text',function(err){
//     if (err) throw err;
//     console.log('updated');

// });




// delete files

// unlink

// var fs = require('fs');

// fs.unlink('mynewfile2.txt',function(err){
//     if (err) throw err;
//     console.log('deleted');
// });




// rename 

// var fs = require ('fs');
// fs.rename( 'newfile',"mynewfile3.txt",function(err,){
//     if (err) throw err;
//     console.log('renamed');

// });




//  IN-BUILT URL MODULE 

// URL.PARSE() 


var url = require ('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);




// file server 

// var http = require('http');
// var url = require ('url');
// var fs = require('fs')


// http.createServer(function(req,res){
//     var q = url.parse(req.url, true);
//     var filename = "."+ q.pathname ;
//     fs.readFile(filename, function(err,data){
//         if (err){
//             return res.end('404 not found');
//         }
           
//         res.write(data);
//         return res.end();
//     })

// }).listen(3000);







// upper case 

// var http = require('http');
// var uc = require('upper-case');

// http.createServer(function(req,res){
//     res.write(uc.upperCase('hello world'));
//     res.end();
// }).listen(5050)




// Events in Node.js

// var fs = require('fs');
// var rs = fs.createReadStream('demofile.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });




// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// //Create an event handler:
// var myEventHandler = function () {
//     console.log('I hear a scream!');
//     }

// //Assign the event handler to an event:
// eventEmitter.on('bullet', myEventHandler);

// //Fire the 'scream' event:
// eventEmitter.emit('bullet');





// const EventEmitter = require('events');

// // Create an instance of EventEmitter
// const emitter = new EventEmitter();

// // Define an event handler function
// function onSomeEvent(data) {
//   console.log(`Something happened: ${data}`);
// }

// // Register the event handler for a custom event
// emitter.on('customEvent', onSomeEvent);

// // Emit the custom event
// emitter.emit('customEvent', 'This is some data');




// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// // Register a one-time event handler
// emitter.once('onceEvent', () => {
//   console.log('This event will only trigger once.');
// });

// // Emit the event multiple times, but the listener is automatically removed after the first trigger
// emitter.emit('onceEvent');
// emitter.emit('onceEvent');




// const EventEmitter = require('events');

// class CustomEmitter extends EventEmitter {
//   constructor() {
// 	super();
//   }

//   someMethod() {
//     // Do some work
//     this.emit('customEvent', 'Some data');
//   }
// }

// const customInstance = new CustomEmitter();

// customInstance.on('customEvent', (data) => {
//   console.log(`Custom event occurred: ${data}`);
// });

// customInstance.someMethod(); // Triggers the custom event







// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('namespace:event1', () => {
//   console.log('Event 1 in the namespace');
// });

// emitter.on('namespace:event2', () => {
//   console.log('Event 2 in the namespace');






// const EventEmitter = require('events');

// class TemperatureSensor extends EventEmitter {
//   constructor() {
// 	super();
//     this.temperature = 0;
//   }

//   setTemperature(temperature) {
//     this.temperature = temperature;
//     this.emit('temperatureChange', temperature);
//   }
// }

// const sensor = new TemperatureSensor();

// sensor.on('temperatureChange', (temperature) => {
//   console.log(`Temperature changed to ${temperature}°C`);
// });

// sensor.setTemperature(25); // Triggers the temperatureChange event
// sensor.setTemperature(30); // Triggers the event again









// CREATE AN UPLOAD FORM 



// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }).listen(8088); 





// var http = require('http');
// // var formidable = require('formidable');

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     // var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       res.write('File uploaded');
//       res.end();
//     });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);