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
			standardRenameString : (parseInt(String(Math.random()).split('.')[1])%10000)%(parseInt(String(Math.random()).split('.')[1])%500)
		},
		folderAnalyze : {
			delay : 3200
		}
	}
};
