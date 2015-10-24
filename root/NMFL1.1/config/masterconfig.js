module.exports = {
	development : {
		fStructure : {
			showFolderAnalysis:false,
			source : 'outbox',
			destinationLock : 'outboxlock',
			destinationUnlock : 'outboxunlock',
			statusFile : 'status.nmfljson',
			lockFileExtn : 'nmflzip',
			standardRenameString:'10000000'
		},
        folderAnalyze:{
            delay:3200
        }
	}
};