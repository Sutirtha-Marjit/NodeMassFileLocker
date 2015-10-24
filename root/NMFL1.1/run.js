var masterEngine = new (require('./engine/masterengine.js'))();
masterEngine.start();

/*
var fs = require('fs');
var readStream = fs.createReadStream('PK (2014) - 1CD - (New Source) - Non Retail DVD-Rip - Hindi - x264 - MP3 - Mafiaking - Team M2TV.mkv');
var writeStream = fs.createWriteStream('KP245.pxc');
readStream.on('open',function(){
console.log('Opened');
});

readStream.on('close',function(){
console.log('closed');
});

console.log(writeStream);

readStream.pipe(writeStream);


var stats = fs.statSync("myfile.txt")
 var fileSizeInBytes = stats["size"]
*/