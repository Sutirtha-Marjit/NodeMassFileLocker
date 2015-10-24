module.exports = function () {
	
	var fs = require('fs');
	var masterconfig = require('../config/masterconfig.js');
	var commonlib = require('../config/commonlib.js');
	var MassFileCopy = require('./massfilecopy.js');
	var MassFileRename = require('./massfilerename.js');
	var SourceAnalyzer = require('./sourceanalyzer.js');
	var c = commonlib.c;
	
	const RUNOPTIONS=[
	 'LOCK-ONLY',
	'UNLOCK-ONLY',
	'RENAME-ONLY',
	'COMPLETE-LOCK'
	];

	var fStructure = masterconfig.development.fStructure;
    var folderAnalyze = masterconfig.development.folderAnalyze;
    var massFileRename = new MassFileRename();
	var sourceAnalyzer = new SourceAnalyzer();
	var massFileCopy = new MassFileCopy();
	
	var instance = this;
	
	var executeMassRename = function(reportObject){
	massFileRename.startStructuredRenameJob(reportObject.files,{standardRenameString:fStructure.standardRenameString});
	};

	var executeMassLock = function(reportObject){
	   massFileCopy.startMassCopyJob({fileList:reportObject.files,jobMode:'lock',onJobFinish:null,targetFolder:fStructure.destinationLock,lockFileExtn:fStructure.lockFileExtn});
	};


	instance.start = function(){		
		commonlib.separator('M');
		c('NMFL Engine is starting...');	
		c(new Date());
		commonlib.separator('s');

		var runDirection = RUNOPTIONS[0];
        
        switch(runDirection){

        	case 'RENAME-ONLY':
        		sourceAnalyzer.analyzeFolder({
									folderName:fStructure.source,
									forceDelay:folderAnalyze.delay,
									showFolderAnalysis:fStructure.showFolderAnalysis,
									onReportReady:executeMassRename
								    });	
        	break;

        	case 'LOCK-ONLY':
        		 sourceAnalyzer.analyzeFolder({
									folderName:fStructure.source,
									forceDelay:folderAnalyze.delay,
									onReportReady:executeMassLock,
									showFolderAnalysis:fStructure.showFolderAnalysis
								    });
        	break;

        }


		
	}
	
	
	
	
};


/*var dummyData = [
	{source:'outbox/120.mpg',destination:'outboxlock/121.mpeg'},
	{source:'outbox/120.mpg',destination:'outboxlock/1298.mpeg'},
	{source:'outbox/120.mpg',destination:'outboxlock/99.mpeg'},
	];
	
	*/