module.exports = (function (config) {
	var masterconfig = require('../config/masterconfig.js');
	var fs = require('fs');
	var fStructure = masterconfig.development.fStructure;
	var instance = this;
	
	
	instance.fileCopy = function (config) {
		var sourceFile = fStructure.source + '/' + config.source;
		var destinationFile = fStructure.destinationLock+'/'+config.destination;
		
		fs.readFile(sourceFile, function (e, content) {
			if (e) {}
			fs.writeFile(destinationFile, content, function (err) {
				if (err){
				console.log(err);
				console.log('Error occuring while copying file '+sourceFile);
				}else{
				console.log(sourceFile+' copied as '+destinationFile);
				fStructure.separator('L');
				}
				
			});
		});
	}
	
	
	
	
});
