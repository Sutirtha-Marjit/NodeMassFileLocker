module.exports = function (config) {

	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End
    
    var longFileBufferSize = 400 * 1024;

	instance.largeFileCopy = function (config) {
		var readStream,
		writeStream,
		sourceFile = config.sourceFile;
		var destinationFile = config.destinationFile;
		if (config.messageForOccuredException !== undefined && config.messageForOccuredException !== null) {
			c(config.messageForOccuredException);
		}
		readStream = fs.createReadStream(sourceFile, {
				bufferSize : longFileBufferSize
			});
		writeStream = fs.createWriteStream(destinationFile);
		readStream.pipe(writeStream);
		readStream.on('open', function () {
			console.log(sourceFile + ' copying...');
		});

		readStream.on('close', function () {
			console.log(sourceFile + ' closed');
			c(sourceFile + 'successfully copied as ' + destinationFile);
			commonlib.separator('S');
			if (config.onCopyFinish !== undefined && config.onCopyFinish !== null) {
				config.onCopyFinish();
              }
		});
	};

	//Public function to copy and create files
	instance.fileCopy = function (config) {
		var sourceFile = config.sourceFile;
		var destinationFile = config.destinationFile;
		c('Reading ' + sourceFile + '...');
		fs.readFile(sourceFile, function (readingError, content) {
			if (readingError) {
				c('Problem in reading file ' + sourceFile);
				c(readingError);
				config.messageForOccuredException = "Due to file read exception largeFileCopy called\nReading " + sourceFile + " again...";
				instance.largeFileCopy(config);
			} else {
				fs.writeFile(destinationFile, content, function (writingError) {
					if (writingError) {
						c(writingError);
						c('Error occuring while copying file ' + sourceFile);
					} else {
						c(sourceFile + ' copied as ' + destinationFile);
					}
					commonlib.separator('S');
					if (config.onCopyFinish !== undefined && config.onCopyFinish !== null) {
						config.onCopyFinish();
					}
				});
			}
		});
	}
};