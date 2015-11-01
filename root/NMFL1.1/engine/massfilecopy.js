module.exports = function (config) {

	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End

	var SingleFileCopy = require('./singlefilecopy.js');
	var StatusFileManager = require('./statusfilemanager.js');
	var SourceAnalyzer = require('./sourceanalyzer.js');
	var UnlockAction = require('./unlockaction.js');
	var DeleteAction = require('./deleteaction.js');

	var currentFileToLockList = [];
	var currentFileToUnlockList = [];
	var unlockactions = null;
	var targetFolder = null;
	var lockFileExtn = null;
	var statusFile = null;
	var singleFileCopy = new SingleFileCopy();
	var statusFileManager = new StatusFileManager();
	var sourceAnalyzer = new SourceAnalyzer();
	var deleteAction = new DeleteAction();

	var fileCount = -1;
	var jobResult = {
		f : [],
		type : 'status',
		creation : new Date(),
		author : 'NMFL1.1'
	};

	var checkAndCleanDirectory = function (afterCleancallback) {
		if (!fs.existsSync('./' + targetFolder)) {
			fs.mkdirSync('./' + targetFolder);
			afterCleancallback();
		} else {
			c('Target locked folder "' + targetFolder + '" is already available');
			deleteAction.folderCleanUp({
				folderName : targetFolder,
				onCleanComplete : afterCleancallback
			});
		}
	};

	var goforNextFileToLock = function () {
		if (fileCount < currentFileToLockList.length - 1) {
			fileCount++;
			var targetFileName = targetFolder + '/K62P' + fileCount + '.' + lockFileExtn;
			c(targetFileName);
			c(currentFileToLockList[fileCount].file);

			singleFileCopy.largeFileCopy({
				sourceFile : currentFileToLockList[fileCount].file,
				destinationFile : targetFileName,
				onCopyFinish : function () {
					jobResult.f.push([targetFileName, currentFileToLockList[fileCount].file]);
					goforNextFileToLock();
				}
			});

		} else {
			c('Lock status file is initiating...');
			statusFileManager.createStatusFile({
				statusContent : JSON.stringify(jobResult),
				targetFolder : targetFolder,
				statusFile : statusFile
			});
		}

	};

	var goforNextFileToUnlock=function(){
		if (fileCount < currentFileToUnlockList.length - 1) {
		 fileCount++;
		 var targetFileName = targetFolder+"/"+currentFileToUnlockList[fileCount][1];
		 var sourceFile = currentFileToUnlockList[fileCount][0];
		 commonlib.separator('s');
		 c(targetFileName)
		 c(sourceFile)	 
		 
			singleFileCopy.largeFileCopyWidthFolders({
				sourceFile : sourceFile,
				destinationFile : targetFileName,
				onCopyFinish : function () {
					goforNextFileToUnlock();
				}});
				
		 
		}
	};

	var startNewCopyJobToLock = function (config) {
		currentFileToLockList = config.fileList;
		lockFileExtn = config.lockFileExtn;
		statusFile = config.statusFile;
		checkAndCleanDirectory(function () {
			goforNextFileToLock();
		});

	};

	var startNewCopyJobToUnLock = function (config) {
		if (config.folderList.length == 1) {
			checkAndCleanDirectory(function () {
				statusFileManager.readStatusFile({
					statusFile : config.statusFile,
					operation : config.operation,
					sourceLockFolder : config.sourceLockFolder,
					onReadComplete : function (statusContent) {
						if (statusContent !== undefined && statusContent !== null) {
							currentFileToUnlockList = statusContent.f;
							c('Lock Status retrieved successfully');
							c(currentFileToUnlockList.length + ' locked files are found');
							fileCount = -1;

							goforNextFileToUnlock();
						}

					}
				});

			});
		} else {
			if(config.folderList.length == 0){
				c('No such lock folders are available. Please lock the files first');
			}else{
			c('More than one locked folder is there. Please remove all except the latest one. Operation aborted');
			}
		}
	};

	instance.startMassCopyJob = function (config) {
		if (config.jobMode === 'unlock') {
			commonlib.separator('s');
			c('File unlocking initiated....');
			targetFolder = config.targetFolder;
			startNewCopyJobToUnLock(config);
		}
		if (config.jobMode === 'lock') {
			commonlib.separator('s');
			c('File locking initiated....');
			targetFolder = config.targetFolder;
			startNewCopyJobToLock(config);
		}
		if (config.jobMode === 'normal') {}
	};

};