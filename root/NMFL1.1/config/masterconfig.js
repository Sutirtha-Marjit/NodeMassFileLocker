module.exports = {
	development : {
		fStructure : {
			showFolderAnalysis:true,
			operation:'operation',
			source : 'operation/outbox',
            unlockContainer:'operation/unlocked',
			destinationLock : 'operation/outboxlock',
			destinationUnlock : 'operation/outboxunlock',
			statusFile : 'status.nmfljson',
			lockFileExtn : 'nmflzip',
			standardRenameString:'100'
		},
        folderAnalyze:{
            delay:3200
        }
	}
};