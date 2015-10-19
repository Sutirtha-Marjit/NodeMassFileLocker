module.exports = {
	author : 'sutirtha',
	sourceFolderToRename : 'outbox',
	lockFolderSign : 'LCL',
	jobStatusFileName : 'job',
	jobStatusFileType : 'status',
	lockedFileType: 'sipxl',
	unLockTargetFolderSign:'UNLOCKED',
	delimeter:'/',
	processDelay : 3000,
	showDivider:function(sDelimeter,newLine){
		var str='';
		for(var i=0;i<164; i++){
			str +=sDelimeter;
		}
		for(var n=0;n<newLine;n++){
			str +='\n';
		}
		console.log(str);
	
	}
};
