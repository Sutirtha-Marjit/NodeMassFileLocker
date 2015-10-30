module.exports = function(){

	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End

	instance.deleteFile = function(config){
		fs.unlink(config.filePath,function(){
			c(config.filePath+' deleted');
			config.onDeleteCOmplete();
		})
	};

	instance.deleteFolder = function(folderPath){
	 c('Deleteing folder '+folderPath);	
	};	


};