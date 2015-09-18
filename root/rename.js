(function (fs) {
	console.log("Mass Renameing starting ...");
	console.log(new Date());
	console.log("»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
	var G = {
		FileSystem : fs,
		folderInfo : {
			original : []
		},
		root : 'outbox/'
	};
	function MassRenameEngine() {
		var self = this;
		self.createOutPutFile = function () {
			G.FileSystem.writeFile(G.root + 'job.stattus', JSON.stringify(G.folderInfo), function (err) {
				console.log(err);
			});
		};
		self.commonRenameTask = function (list, random, date, path, suffix) {
			var f = 0;
			if (suffix === null || suffix === undefined) {
				var sarr = list.currentDir.split("/");
				suffix = sarr[sarr.length - 2] + ".";
			}
			if (date) {
				var d = new Date();
				d.getDate() < 10 ? date = "0" + d.getDate() : date = d.getDate();
				d.getMonth() < 10 ? month = "0" + d.getMonth() : date = d.getMonth();
				suffix += (date + month + d.getFullYear());
			}
			if (random) {
				var rand = (Math.random() + "").split('.')[1];
				rand = rand.substr(2, 2);
				suffix += "_" + rand + "_";
			}
			console.log('Rename process starting for ' + path + ' ...');
			while (f < list.files.length) {
				var targetFileName = list.currentDir + suffix + f + '.jpg';
				G.FileSystem.rename(list.files[f], targetFileName);
				console.log(f + ': ' + list.files[f] + ' renamed to ' + list.currentDir + suffix + f + '.jpg : DONE');
				G.folderInfo.original.push(targetFileName);
				f++;
			}
		}
		self.getList = function (path, modifyFunction) {
			var list = {
				currentDir : path,
				folders : [],
				files : []
			};
			G.FileSystem.readdir(path, function (err, files) {
				for (var i = 0; i < files.length; i++) {
					if (G.FileSystem.lstatSync(path + files[i]).isDirectory()) {
						list.folders.push(path + files[i]);
					} else {
						list.files.push(path + files[i]);
					}
				}
				var consoleStr = list.files.length + ' files';
				if (list.folders.length > 0) {
					consoleStr += ' and ' + list.folders.length + ' folders';
				}
				consoleStr += ' inside ' + path;
				console.log('\n\n' + consoleStr);
				modifyFunction(list);
			});
			return list;
		};
	}
	var mre = new MassRenameEngine();
	function continuousRename(folderPath) {
		mre.getList(folderPath, function (list) {
			mre.commonRenameTask(list, true, true, folderPath);
			if (list.folders.length > 0) {
				for (var i = 0; i < list.folders.length; i++) {
					continuousRename(list.folders[i] + "/");
				}
			}
		});
	}
	function showFinalObject() {
		setTimeout(function () {
			mre.createOutPutFile();
			console.log('\n\n');
			console.log("»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
			console.log('\n');
			console.log('New folder structure:>');
			console.log('\n');
			console.log(G.folderInfo);
			console.log('\n');
			console.log("»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
			console.log('COMPLETED');
		}, 2000);
	}
	continuousRename(G.root);
	showFinalObject();
})(require('fs'));
