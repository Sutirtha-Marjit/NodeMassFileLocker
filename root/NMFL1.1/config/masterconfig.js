module.exports = {
	development : {
		fStructure : {
			source : 'outbox',
			destinationLock : 'outboxlock',
			destinationUnlock : 'outboxunlock',
			statusFile : 'status.nmfljson',
			lockFileExtn : 'nmflzip'
		}
	}
};