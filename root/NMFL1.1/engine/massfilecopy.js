module.exports = function(config){

	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End

	var SingleFileCopy = require('./singlefilecopy.js');
	var StatusFileManager = require('./statusfilemanager.js');
     var UnlockAction = require('./unlockaction.js');
	
	var currentFileList=[];
	var targetFolder=null;
	var lockFileExtn=null;
	var statusFile=null;
	var singleFileCopy = new SingleFileCopy();
	var statusFileManager = new StatusFileManager();
	var fileCount=-1;
	var jobResult = {f:[],type:'status',creation:new Date(),author:'NMFL1.1'};

	var checkAndCreateDirectory = function(){
		if (!fs.existsSync('./'+targetFolder)){
    		fs.mkdirSync('./'+targetFolder);
		}else{
			c('The folder "'+targetFolder+'" is already available in current location.');
			targetFolder = targetFolder+'0'+new Date().getTime();
			fs.mkdirSync('./'+targetFolder);
			c('So new folder "'+targetFolder+'"" created ');			
		}				
	};

	var goforNextFileToLock = function(){
	  if(fileCount<currentFileList.length-1){
	  	fileCount++;
	  var targetFileName = targetFolder+'/K62P'+fileCount+'.'+lockFileExtn;
	  c(targetFileName);
	  c(currentFileList[fileCount]);
	  	
	  
	  singleFileCopy.fileCopy({
	  	sourceFile:currentFileList[fileCount].file,
	  	destinationFile:targetFileName,
	  	onCopyFinish:function(){
	  		jobResult.f.push([targetFileName,currentFileList[fileCount].file]);
			goforNextFileToLock();
	  	}
	  });	  	

	  }else{
		c('Lock status file is initiating...');
        statusFileManager.createStatusFile({
		statusContent:JSON.stringify(jobResult),
		targetFolder:targetFolder,
		statusFile:statusFile
		});	
		}
	  
	};

	var startNewCopyJobToLock = function(config){
		checkAndCreateDirectory();
		currentFileList = config.fileList;
		lockFileExtn = config.lockFileExtn;
		statusFile = config.statusFile;
		goforNextFileToLock();
	};
    
    var startNewCopyJobToUnLock = function(config){
		c(config);
	};
    

	instance.startMassCopyJob = function(config){
		if(config.jobMode === 'unlock'){
            commonlib.separator('s');
            startNewCopyJobToUnLock(config);
		}
		if(config.jobMode === 'lock'){
			commonlib.separator('s');
			c('File locking initiated....');
			targetFolder = config.targetFolder;
			startNewCopyJobToLock(config);
		}
		if(config.jobMode === 'normal'){

		}
	};

};