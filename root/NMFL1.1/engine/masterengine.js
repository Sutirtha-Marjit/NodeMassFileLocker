module.exports = function () {

	var fs = require('fs');
	var masterconfig = require('../config/masterconfig.js');
	var commonlib = require('../config/commonlib.js');
	var MassFileCopy = require('./massfilecopy.js');
	var MassFileRename = require('./massfilerename.js');
	var SourceAnalyzer = require('./sourceanalyzer.js');

	var c = commonlib.c;

	const RUNOPTIONS = []
	RUNOPTIONS['LO'] = 'LOCK-ONLY';
	RUNOPTIONS['ULO'] = 'UNLOCK-ONLY';
	RUNOPTIONS['RO'] = 'RENAME-ONLY';
	RUNOPTIONS['CL'] = 'COMPLETE-LOCK';

	var fStructure = masterconfig.development.fStructure;
	var folderAnalyze = masterconfig.development.folderAnalyze;
	var massFileRename = new MassFileRename();
	var sourceAnalyzer = new SourceAnalyzer();
	var massFileCopy = new MassFileCopy();

	var instance = this;

	var executeMassRename = function (reportObject) {
		massFileRename.startStructuredRenameJob(reportObject.files, {
			standardRenameString : fStructure.standardRenameString
		});
	};

	var executeMassLock = function (reportObject) {
		c(reportObject);
		massFileCopy.startMassCopyJob({
			fileList : reportObject.files,
			jobMode : 'lock',
			onJobFinish : null,
			targetFolder : fStructure.operation + '/' + fStructure.destinationLock,
			lockFileExtn : fStructure.lockFileExtn,
			statusFile : fStructure.statusFile
		});
	};

	var executeMassUnlock = function (config) {

		massFileCopy.startMassCopyJob({
			folderList : config.lockedFolders,
			jobMode : 'unlock',
			onJobFinish : null,
			targetFolder : fStructure.destinationUnlock,
			sourceLockFolder:fStructure.destinationLock,
			statusFile : fStructure.statusFile,
			operation : fStructure.operation
		});
	};

	instance.start = function (option) {
		commonlib.separator('M');
		c('NMFL Engine is starting...');
		c(new Date());
		commonlib.separator('s');

		var runDirection = RUNOPTIONS[option];

		switch (runDirection) {

		case 'RENAME-ONLY':
			sourceAnalyzer.analyzeFolder({
				folderName : fStructure.operation + '/' + fStructure.source,
				forceDelay : folderAnalyze.delay,
				showFolderAnalysis : fStructure.showFolderAnalysis,
				onReportReady : executeMassRename
			});
			break;

		case 'LOCK-ONLY':
			sourceAnalyzer.analyzeFolder({
				folderName : fStructure.operation + '/' + fStructure.source,
				forceDelay : folderAnalyze.delay,
				onReportReady : executeMassLock,
				showFolderAnalysis : fStructure.showFolderAnalysis
			});
			break;

		case 'UNLOCK-ONLY':
			sourceAnalyzer.findLockedFolders({
				operation : fStructure.operation,
				folderPrefix : fStructure.destinationLock,
				destinationUnlock : fStructure.operation + '/' + fStructure.destinationUnlock,
				onReportReady : executeMassUnlock
			});
			break;

		}

	}

};