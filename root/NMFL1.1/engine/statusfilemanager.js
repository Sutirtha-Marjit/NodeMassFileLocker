module.exports = function(config){

	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End
	
	instance.createStatusFile = function(config){
		var fileName;
		if(config.statusContent!==null || config.statusContent!==undefined){
			fileName = config.targetFolder+'/'+config.statusFile;
			fs.writeFile(fileName,config.statusContent,function(statusFileWriteError){
				if(statusFileWriteError){
				c(statusFileWriteError);
				}else{
				c('status file successfully created as '+fileName);
				}
			})
			
		}
		else{
		c('Since no content is available system is unable to generate status file');
		}
	};
	
	
	instance.readStatusFile = function(config){
		
		
	
	};
	
	};