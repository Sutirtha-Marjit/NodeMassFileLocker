module.exports = function () {

	//Common code block OOP:Start
	var commonlib = require('../config/commonlib.js');
	var fs = require('fs');
	var c = commonlib.c;
	var instance = this;
	//Common code block:End
	var folderDenote = '/';
	var localFolderNameCapture = [];
	var tempList = null;
	var renameIndex = -1;
	var renameOptions = {};
	instance.startCopyJob = function (fileList, options) {
		c(fileList);
	};

	var spaceEraser = function (fileName) {
		return fileName.replace(' ', '_');
	};

	singleRenameJob = function (renameOptions) {
		renameIndex++;
		if (renameIndex < tempList.length) {
			var targetName = getStructuredName(tempList[renameIndex], renameOptions);
			if (tempList[renameIndex].file === targetName) {
				singleRenameJob(renameOptions);
			} else {
				fs.rename(tempList[renameIndex].file, targetName, function () {
					c(tempList[renameIndex].file + ' renamed to ' + targetName);
					singleRenameJob(renameOptions);
				});
			}
		}
	}

	instance.startStructuredRenameJob = function (fileList, options) {
		tempList = fileList;
		renameOptions = options;
		singleRenameJob(options);
	};

	var getStructuredName = function (fileObject, options) {
		var extn,
		pathString = new String(fileObject.file);
		var extnArr = pathString.split('.');

		extn = extnArr[extnArr.length - 1];

		if (pathString.indexOf(folderDenote) != -1) {
			var len,
			parentFolderName = null,
			patharr = pathString.split(folderDenote);
			len = patharr.length;
			parentFolderName = '' + patharr[len - 2]
				parentFolderName = spaceEraser(parentFolderName.toLowerCase());
			patharr[len - 1] = parentFolderName + options.standardRenameString + fileObject.index + '.' + extn;
			return patharr.join(folderDenote);
		}

		return 'unknown_nonindexed_' + options.standardRenameString + fileObject.index + '.' + extn;
	}

};