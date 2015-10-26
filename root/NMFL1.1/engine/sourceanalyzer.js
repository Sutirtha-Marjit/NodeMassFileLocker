module.exports = function () {

	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End


	instance.reportObject = {
		time : {}

	};

	var repeatativeAnalysis = function (folderPath) {

		fs.readdir(folderPath, function (errorWhileRead, files) {
			var i = 0,
			directory = null,
			totalFile = files.length,
			elementPath = null;
			while (i < totalFile) {
				elementPath = folderPath + '/' + files[i];
				directory = fs.lstatSync(elementPath).isDirectory();
				if (!directory) {
					instance.reportObject.files.push({
						file : elementPath,
						index : i
					});
				} else {
					repeatativeAnalysis(elementPath);
				}
				i++;
			}
		});
	}

	var isSourceFileAvailable = function (targetFolder) {
		return fs.existsSync('./' + targetFolder);
	};

	instance.analyzeFolder = function (config) {
		instance.reportObject.time.initTime = new Date().getTime();
		instance.reportObject.files = [];

		if (isSourceFileAvailable(config.folderName)) {
			repeatativeAnalysis(config.folderName);
			c('Folder scan is running....');
			setTimeout(function () {
				instance.reportObject.time.publishTime = new Date().getTime();
				
				if (config.showFolderAnalysis) {
					c('Analyzed and result is >');
					c(instance.reportObject);
					commonlib.separator('s');
				}				
				config.onReportReady(instance.reportObject);

			}, config.forceDelay);
		} else {
			c('Process suspended!\nSource folder "' + config.folderName + '" is not available. Please inspect the location once more');
		}
	};
	
	instance.findLockedFolders = function(config){
		
		fs.readdir('./', function (errorWhileRead, files) {
			var i=0,lockedFolders=[];
			if(errorWhileRead){
				c('Error while looking for locked folders');
			}else{
				while(i<files.length){
					if(-1!==files[i].indexOf(config.folderPrefix)){
						lockedFolders.push(files[i]);					
					}
				i++;
				}
				c(lockedFolders.length+' folders locked found in current directory');
			}
		});		
	};

}