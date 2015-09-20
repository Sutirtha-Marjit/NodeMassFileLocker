(function (fs) {
    
	var G = {
		FileSystem : fs,
		folderInfo : {},
		root : '.',
		source: null,
		statusFile:'job.status',
		processDelay : 2000,
		error : {
			fileAvailable : true
		}
	};
	
	var readStatusFile = function(){
		
		G.FileSystem.readFile(G.source+'/'+G.statusFile, 'utf8', function (err, data) {
		if (err!==null) {
			console.log(err.path+' is not available');
			console.log('Hence all actions are suspended');
		}else{		
			G.folderInfo = JSON.parse(data);
			var modifed = G.folderInfo.modified;
			for(var i=0;i<modifed.length;i++){
				console.log(modifed[i][0]);
				G.FileSystem.rename(modifed[i][1], 'target111/'+modifed[i][0],function(err){
					console.log(err);
				});
			}
		}
		});
	};
	
	var findSourceFolder = function(callBack){
		G.FileSystem.readdir(G.root, function (err, files) {
			var found=false,i=0;
			if(err===null){
				console.log('Scanning folder...');
				while(i<files.length && !found){
				  if(G.FileSystem.lstatSync(files[i]).isDirectory()){
					if(files[i].indexOf('LCL')!=-1){
					   found = true;
					   G.source = files[i];	
                       console.log('LCL directory found :> '+G.source);
					   readStatusFile();	
					}
				  }
				 i++;
				}
				if(!found){
				  console.log('Sorry no LCL folder is available here. Check your directory again');	
				}
			}else{
			 console.log(err);
			}
		});
	
	};
	
	findSourceFolder(readStatusFile);

})(require('fs'));
