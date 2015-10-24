module.exports = {
	development : {
		fStructure : {
			showFolderAnalysis:true,
			source : 'outbox',
			destinationLock : 'outboxlock',
			destinationUnlock : 'outboxunlock',
			statusFile : 'status.nmfljson',
			lockFileExtn : 'nmflzip',
			standardRenameString:'100'
		},
        folderAnalyze:{
            delay:3200
        }
	}
};