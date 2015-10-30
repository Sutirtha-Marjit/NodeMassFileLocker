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

	var currentFileList = [];
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

	var checkAndCleanLockDirectory = function (afterCleancallback) {
		if (!fs.existsSync('./' + targetFolder)) {
			fs.mkdirSync('./' + targetFolder);
		} else {

			sourceAnalyzer.analyzeFolder({
				folderName : targetFolder,
				forceDelay : 4500,
				showFolderAnalysis : false,
				onReportReady : function (reportObject) {
					if (reportObject.files.length > 0) {
						c('Target locked folder is available and but not cleaned');
						c('Lock folder cleaning is going on...');
						commonlib.separator('s');
						var fileCount = 0;
						function deleteNextFile() {

							deleteAction.deleteFile({
								filePath : reportObject.files[fileCount].file,
								onDeleteCOmplete : function () {
									fileCount++;
									if (fileCount < reportObject.files.length) {
										deleteNextFile();
									} else {
										c('Lock folder has been cleaned');
										afterCleancallback();
									}
								}
							});
						}
						deleteNextFile();
					} else {
						c('Target locked folder is available and cleaned');
						afterCleancallback();
					}
				}
			});
		}
	};

	var goforNextFileToLock = function () {
		if (fileCount < currentFileList.length - 1) {
			fileCount++;
			var targetFileName = targetFolder + '/K62P' + fileCount + '.' + lockFileExtn;
			c(targetFileName);
			c(currentFileList[fileCount].file);

			singleFileCopy.largeFileCopy({
				sourceFile : currentFileList[fileCount].file,
				destinationFile : targetFileName,
				onCopyFinish : function () {
					jobResult.f.push([targetFileName, currentFileList[fileCount].file]);
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

	var startNewCopyJobToLock = function (config) {
		currentFileList = config.fileList;
		lockFileExtn = config.lockFileExtn;
		statusFile = config.statusFile;
		checkAndCleanLockDirectory(function () {
			goforNextFileToLock();
		});

	};

	var startNewCopyJobToUnLock = function (config) {
		c(config);
		if (config.folderList.length == 1) {
			statusFileManager.readStatusFile({
				statusFile : config.statusFile,
				operation:config.operation,
				sourceLockFolder:config.sourceLockFolder,
				
			});
		} else {
			c('More than one locked folder is there. Please remove all except the latest one');
		}
	};

	instance.startMassCopyJob = function (config) {
		if (config.jobMode === 'unlock') {
			commonlib.separator('s');
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