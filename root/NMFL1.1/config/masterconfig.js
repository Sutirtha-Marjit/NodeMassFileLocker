module.exports = {
	development : {
		fStructure : {
			showFolderAnalysis : false,
			operation : 'operation',
			source : 'outbox',
			unlockContainer : 'unlocked',
			destinationLock : 'outboxlock',
			destinationUnlock : 'outboxunlock',
			statusFile : 'status.nmfljson',
			lockFileExtn : 'nmflzip',
			standardRenameString : '100'
		},
		folderAnalyze : {
			delay : 3200
		}
	}
};
