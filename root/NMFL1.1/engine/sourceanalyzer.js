module.exports = function(){
	
	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End
	
     
	instance.reportObject = {time:{}};
	
	var repeatativeAnalysis = function(folderPath){
		
		fs.readdir(folderPath,function(errorWhileRead,files){
			var i=0,directory=null,totalFile=files.length,elementPath=null;
			while(i<totalFile){
				elementPath = folderPath+'/'+files[i];
				directory = fs.lstatSync(elementPath).isDirectory();
				if(!directory){
					instance.reportObject.files.push({file:elementPath,index:i});
				}else{
					repeatativeAnalysis(elementPath);	
				}
				i++;
			}
		});		
	}

	
	instance.analyzeFolder = function(config){
		 instance.reportObject.time.initTime = new Date().getTime();
         instance.reportObject.files = [];
		repeatativeAnalysis(config.folderName);
		c('Folder scan is running....');
         setTimeout(function(){
         instance.reportObject.time.publishTime = new Date().getTime();	
        c('Analyzed and result is >'); 
		if(config.showFolderAnalysis){
			c(instance.reportObject);
			commonlib.separator('s');
		}
		
		
        
        config.onReportReady(instance.reportObject);

		},config.forceDelay);
		
	};

}