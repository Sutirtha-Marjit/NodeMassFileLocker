module.exports = function () {
	
	var fs = require('fs');
	var masterconfig = require('../config/masterconfig.js');
	var commonlib = require('../config/commonlib.js');
	var MassFileRename = require('./massfilerename.js');
	var SourceAnalyzer = require('./sourceanalyzer.js');
	var c = commonlib.c;
	
	
	var fStructure = masterconfig.development.fStructure;
	
	var instance = this;
	
	instance.start = function(){
		
		var massFileRename = new MassFileRename();
		var sourceAnalyzer = new SourceAnalyzer();
		
		commonlib.separator('M');
		c('NMFL Engine is starting...');	
		c(new Date());
		commonlib.separator('s');
		
		sourceAnalyzer.analyzeFolder({folderName:masterconfig.development.fStructure.source});
		//massFileRename.startBatchJob({sourceFolder:masterconfig.development.fStructure.source});
	}
	
	
	
	
};


/*var dummyData = [
	{source:'outbox/120.mpg',destination:'outboxlock/121.mpeg'},
	{source:'outbox/120.mpg',destination:'outboxlock/1298.mpeg'},
	{source:'outbox/120.mpg',destination:'outboxlock/99.mpeg'},
	];
	
	*/