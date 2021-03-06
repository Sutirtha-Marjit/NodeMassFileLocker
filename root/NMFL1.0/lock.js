(function (fs) {
	var support = require('./support.js');
	console.log("\n\n»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
	console.log('Lock starting');
	console.log(new Date());
	console.log("»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»\n\n");
	var G = {
		FileSystem : fs,
		folderInfo : {
			original : [],
			modified : []
		},
		targetFolder : support.lockFolderSign + (('' + Math.random()).split('.')[1]) + '/',
		statusFile : support.sourceFolderToRename+'/'+support.jobStatusFileName+'.'+support.jobStatusFileType,
		root:null
	};

	console.log('\nConfiguration is done\n.....................................................................................');
	var deleteFolder = function (callBack) {

		if (G.FileSystem.existsSync(G.targetFolder)) {
			G.FileSystem.unlink(G.targetFolder, function (error) {
				if (error) {
					throw error
				}
				callBack();
			})
		} else {
			callBack();
		}
	};
	
	var generateDynamicExtension = function(){		
		var ascii,longVal = (String(Math.random()).split('.'))[1];
		ascii = longVal.substr(0,3);
		return ascii+support.lockedFileType;
	};
	
	var createStatusFile = function(){
		G.root = G.targetFolder;
		G.FileSystem.writeFile(G.root + support.jobStatusFileName+'.'+support.jobStatusFileType, JSON.stringify(G.folderInfo), function (err) {
				if(err!==null){
				console.log(err);
				}
			});
	
	};
	
	var startCopyJob = function () {
		
		var rand,
		suffix,
		secureExtension = generateDynamicExtension();
		d = new Date();
		d.getDate() < 10 ? date = "0" + d.getDate() : date = d.getDate();
		d.getMonth() < 10 ? month = "0" + d.getMonth() : date = d.getMonth();
		suffix = (date + month + d.getFullYear());
		rand = (Math.random() + "").split('.')[1];
		rand = rand.substr(2, 2);

		if (!G.FileSystem.existsSync(G.targetFolder)) {
			console.log('\n' + G.targetFolder + ' is not available. So creating new folder ...');
			G.FileSystem.mkdirSync(G.targetFolder);
		}
		console.log("\nChecking list of files :> " + G.folderInfo.original.length + " files found");
		for (var i = 0; i < G.folderInfo.original.length; i++) {
		    var targetFileName = G.targetFolder + 'LCL' + suffix + i + rand + '.'+secureExtension;
			G.FileSystem.createReadStream(G.folderInfo.original[i]).pipe(fs.createWriteStream(targetFileName));
			console.log('file ' + G.folderInfo.original[i] + ' copied as ' + targetFileName);
			console.log('-------------------------------------------------------------------------------------------------------------------------------------------');
			G.folderInfo.modified.push([G.folderInfo.original[i], targetFileName]);
		}

		setTimeout(function () {
			console.log('\n\n-------------------------------------------------------------------------------------------------------------------------------------------\n');
			console.log(G.folderInfo);
			console.log('\n-------------------------------------------------------------------------------------------------------------------------------------------\n\n');
			createStatusFile();
		}, support.processDelay);
	};
	G.FileSystem.readFile(G.statusFile, 'utf8', function (err, data) {
		if (err!==null) {
			console.log(err.path+' is not available');
			console.log('Hence all actions suspended');
		}else{
		G.folderInfo.original = (JSON.parse(data)).original;
		console.log('\nFolder structure is perceived as:');
		console.log('\n\n-------------------------------------------------------------------------------------------------------------------------------------------\n');
		console.log(G.folderInfo);
		console.log('\n-------------------------------------------------------------------------------------------------------------------------------------------\n\n');
		deleteFolder(startCopyJob);
		}
	});
})(require('fs'));
