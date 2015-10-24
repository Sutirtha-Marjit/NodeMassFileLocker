module.exports = function(){
	
	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End	
	
	var checkAndRename = function(){
		
		
		
	}
	
	instance.startBatchJob = function(config){
		c(config);
		fs.readdir(config.sourceFolder+'/',function(err, files){
			if(!err){
				for(var i=0;i<files.length;i++){
					console.log(config.sourceFolder+'/'+files[i]);
				}
			}
		});
	
	};
};