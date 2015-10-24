module.exports = function(){
	
	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End
	
	instance.reportObject = null;
	
	var repeatativeAnalysis = function(folderPath){
		
		fs.readdir(folderPath,function(errorWhileRead,files){
			var i=0,directory=null,totalFile=files.length,elementPath=null;
			while(i<totalFile){
				elementPath = folderPath+'/'+files[i];
				directory = fs.lstatSync(elementPath).isDirectory();
				if(!directory){
					c(elementPath);
					instance.reportObject.push(elementPath);
				}else{
					repeatativeAnalysis(elementPath);	
				}
				i++;
			}
		});
		
		
	}
	
	instance.analyzeFolder = function(config){
		instance.reportObject = [];
		repeatativeAnalysis(config.folderName);
		setTimeout(function(){
		c(instance.reportObject);
		},2E);
		
	};

}