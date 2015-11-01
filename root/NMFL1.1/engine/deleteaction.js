module.exports = function(){

	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End
	
	var SourceAnalyzer = require('./sourceanalyzer.js');
	
	
	
	var sourceAnalyzer = new SourceAnalyzer();

	instance.deleteFile = function(config){
		fs.unlink(config.filePath,function(){
			c(config.filePath+' deleted');
			config.onDeleteComplete();
		})
	};

	instance.folderCleanUp = function(config){
		c('Folder cleanup has been initiated internally for "'+config.folderName+'"');
		sourceAnalyzer.analyzeFolder({
			folderName : config.folderName,
			forceDelay : 4500,
			showFolderAnalysis : false,
			onReportReady : function (reportObject) {
				c(reportObject);
				config.reportObject = reportObject;
				folderCleanUpInit(config);
			}
		});
		
		
	};

	var folderCleanUpInit = function(config){
		c('Folder to cleanup analyzed');
		
		if(config.reportObject.files.length>0){
			var deleteNextFile,fileCount=0;
			c('"'+config.folderName+'" is containing '+config.reportObject.files.length+' old files');
			c('Deletion of old files is starting...');
			commonlib.separator('s');
			
			deleteNextFile = function() {
				instance.deleteFile({
					filePath:config.reportObject.files[fileCount].file,
					onDeleteComplete:function(){
						fileCount++;
						if(fileCount<config.reportObject.files.length){
							deleteNextFile();
						}else{
							c('"'+config.folderName+'" is cleaned');
							commonlib.separator('s');
							config.onCleanComplete();
						}
					}
				});
			
			
			};
			
			
			deleteNextFile();
			
		}else{
			c('No old files available in folder "'+config.folderName+'"');
			config.onCleanComplete();
		}
		
		
    };	


};