module.exports = function(){
	
	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End	
	var folderDenote='/';
	var localFolderNameCapture=[];
	instance.startCopyJob = function(fileList,options){

		c(fileList);
	};

	instance.startStructuredRenameJob = function(fileList,options){
			for(var i=0;i<fileList.length;i++){
				fs.rename(fileList[i].file,getStructuredName(fileList[i],options));
			}		
		
	};

	var getStructuredName = function(fileObject,options){
		var extn, pathString = new String(fileObject.file);
		var extnArr = pathString.split('.');
		
		extn = extnArr[extnArr.length-1];

		if(pathString.indexOf(folderDenote)!=-1){
		  	var len,parentFolderName=null,patharr = pathString.split(folderDenote);
		  	len = patharr.length;
		  	parentFolderName = ''+patharr[len-2]
		  	parentFolderName = parentFolderName.toLowerCase();
		  	patharr[len-1]=parentFolderName+options.standardRenameString+fileObject.index+'.'+extn;
		  	return patharr.join(folderDenote);		  	
		}

		return 'unknown_nonindexed_'+options.standardRenameString+fileObject.index+'.'+extn;
	}
	
};