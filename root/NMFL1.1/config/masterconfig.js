module.exports = {
	development : {
		fStructure : {
			source : 'outbox',
			destinationLock : 'outboxlock',
			destinationUnlock : 'outboxunlock',
			statusFile : 'status.nmfljson',
			lockFileExtn : 'nmflzip',
			separator : function (flg) {
				var msg='',sprtr='-';;
				if(flg==='L'){sprtr='•';}
				if(flg==='M'){sprtr='¤';}
				if(flg==='S'){sprtr='-';}
				for (var i = 0; i < 65; i++) {
					msg +=sprtr;
				}
				console.log(msg);
			}

		}
	}
};