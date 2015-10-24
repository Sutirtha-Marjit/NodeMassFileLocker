module.exports = function (config) {
	
	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End	
	
	//Public function to copy and create files
	instance.fileCopy = function (config) {
		var sourceFile = config.sourceFile;
		var destinationFile = config.destinationFile;
		c('Reading '+sourceFile+'...');
		fs.readFile(sourceFile, function (readingError, content) {
			if (readingError) {
				c('Problem in reading file ' + sourceFile);
				c(readingError);
			} else {
				fs.writeFile(destinationFile, content, function (writingError) {
					if (writingError) {
						c(writingError);
						c('Error occuring while copying file ' + sourceFile);
					} else {
						c(sourceFile + ' copied as ' + destinationFile);
					}
					commonlib.separator('S');
					if(config.onCopyFinish!==undefined && config.onCopyFinish!==null){
					   config.onCopyFinish();
					}
					});
			}
		});
		}
	};
