module.exports = function (config) {
	
	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End	
	
	/*Public function to copy and create files*/
	instance.fileCopy = function (config) {
		var sourceFile = config.source;
		var destinationFile = config.destination;
		c('Reading '+sourceFile+'...');
		fs.readFile(sourceFile, function (readinngError, content) {
			if (readinngError) {
				c('Problem in reading file ' + sourceFile);
			} else {
				fs.writeFile(destinationFile, content, function (writingError) {
					if (writingError) {
						c(writingError);
						c('Error occuring while copying file ' + sourceFile);
					} else {
						c(sourceFile + ' copied as ' + destinationFile);
					}
					commonlib.separator('S');
					});
			}
		});
		}
	};
