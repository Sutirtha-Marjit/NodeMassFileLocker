module.exports = function (config) {

	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End

	instance.createStatusFile = function (config) {
		var fileName;
		if (config.statusContent !== null || config.statusContent !== undefined) {
			fileName = config.targetFolder + '/' + config.statusFile;
			fs.writeFile(fileName, config.statusContent, function (statusFileWriteError) {
				if (statusFileWriteError) {
					c(statusFileWriteError);
				} else {
					c('status file successfully created as ' + fileName);
				}
			});
		} else {
			c('Since no content is available system is unable to generate status file');
		}
	};

	instance.readStatusFile = function (config) {
		var statusFilePath = config.operation + '/' + config.sourceLockFolder + '/' + config.statusFile;
		fs.readFile(statusFilePath, "utf8", function (readingError, statusContent) {
			if (readingError) {
				c(readingError);
				c('problem in reading status file ' + statusFilePath);
				
			} else {
				c('Reading ' + statusFilePath + ' ...')
				config.onReadComplete(JSON.parse(statusContent));
				
			}
		});

	};

};