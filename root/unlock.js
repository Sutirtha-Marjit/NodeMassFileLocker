(function (fs) {
	var support = require('./support.js');
	var G = {
		FileSystem : fs,
		folderInfo : {},
		root : '.',
		source : null,
		statusFile : support.jobStatusFileName + '.' + support.jobStatusFileType,
		processDelay : support.processDelay,
		targetFolder : support.unLockTargetFolderSign + '0' + ((new Date()).getSeconds()) * 3,
		error : {
			fileAvailable : true
		}
	};
	var createTargetFolder = function () {
		if (!G.FileSystem.existsSync(G.targetFolder)) {
			G.FileSystem.mkdirSync(G.targetFolder);
		}
	};
	var createSingleFolder = function () {}
	var createNestedFolder = function (path,writePath,callBack) {
		var targetPath,dirPath = '',
		i = 0;
		pathArr = path.split(support.delimeter),
		limit = pathArr.length-1;
		
		while (i < limit) {
			dirPath = dirPath + '/' + pathArr[i];
			targetPath = G.targetFolder + dirPath;
				if (!G.FileSystem.existsSync(targetPath)) {
					G.FileSystem.mkdirSync(targetPath);
					console.log('\n...................................................................................');
					console.log('\n'+targetPath+' created');
				}
			i++;
		}
		
		callBack(G.targetFolder+'/'+path,writePath);
	};
	var readStatusFile = function () {
		createTargetFolder();
		G.FileSystem.readFile(G.source + '/' + G.statusFile, 'utf8', function (err, data) {
			if (err !== null) {
				console.log(err.path + ' is not available');
				console.log('Hence all actions are suspended');
			} else {
				G.folderInfo = JSON.parse(data);
				var modifed = G.folderInfo.modified;
				for (var i = 0; i < modifed.length; i++) {
					createNestedFolder(modifed[i][0],modifed[i][1],function(writeFile,readFile){
						
						setTimeout(function(){
							console.log('\n')
							console.log('\n')
							console.log(writeFile);
							console.log('\n')
							console.log(readFile);
							console.log('\n')
							console.log('\n')
							G.FileSystem.createReadStream(readFile).pipe(fs.createWriteStream(G.targetFolder+'/'+writeFile));
							
						},2500);
						//
						
					});
					
				}
			}
		});
	};
	var findSourceFolder = function (callBack) {
		G.FileSystem.readdir(G.root, function (err, files) {
			var lockedFolders = [],
			found = false,
			i = 0;
			if (err === null) {
				console.log('Scanning folder...');
				while (i < files.length && !found) {
					if (G.FileSystem.lstatSync(files[i]).isDirectory()) {
						if (files[i].indexOf(support.lockFolderSign) != -1) {
							console.log(support.lockFolderSign+' directory found :> ' + files[i]);
							lockedFolders.push(files[i]);
						}
					}
					i++;
				}
				if (lockedFolders.length == 1) {
					found = true;
					G.source = lockedFolders[0];
					readStatusFile();
				} else {
					if (lockedFolders.length > 1) {
						console.log('More than one locked folder found. All unlocking actions aborted');
					}
					if (lockedFolders.length == 0) {
						console.log('Sorry no LCL folder is available here. Check your directory again');
					}
				}
			} else {
				console.log(err);
			}
		});
	};
	findSourceFolder(readStatusFile);
})(require('fs'));
