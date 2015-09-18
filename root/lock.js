(function (fs) {
	console.log("Lock starting ...");
	console.log(new Date());
	console.log("»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
	var G = {
		FileSystem : fs,
		folderInfo : {
			original : [],
              
		},
		targetFolder : 'LCL/',
		statusFile : 'outbox/job.stattus.txt'
	};
	console.log("\nConfiguration is done");
    
    var deleteFolder = function(callBack){
        
        if (G.FileSystem.existsSync(G.targetFolder)) {
          G.FileSystem.unlink(G.targetFolder,function(error){
              if(error){throw error}
                callBack();
          })
          }else{
            callBack();
        }
    }
    
    
	var startCopyJob = function () {
		var rand,suffix,d = new Date();
		d.getDate() < 10 ? date = "0" + d.getDate() : date = d.getDate();
		d.getMonth() < 10 ? month = "0" + d.getMonth() : date = d.getMonth();
		suffix = (date + month + d.getFullYear());
         
         rand = (Math.random() + "").split('.')[1];
	    rand = rand.substr(2, 2);
         
                  
		if (!G.FileSystem.existsSync(G.targetFolder)) {
			console.log('\n' + G.targetFolder + " is not available. Creating new folder ...");
			G.FileSystem.mkdirSync(G.targetFolder);
		}

		console.log("\nChecking list of files :> " + G.folderInfo.original.length + " files found");
		for (var i = 0; i < G.folderInfo.original.length; i++) {			
			G.FileSystem.createReadStream(G.folderInfo.original[i]).pipe(fs.createWriteStream(G.targetFolder + 'LCL'+suffix+i+rand+'.pnasa'));
              console.log("file " + G.folderInfo.original[i]+" copied as "+G.targetFolder + 'LCL'+suffix+i+rand+'.pnasa');
		}

	};

	G.FileSystem.readFile(G.statusFile, 'utf8', function (err, data) {
		if (err) {
			console.log(err);
		}
		G.folderInfo = JSON.parse(data);
		console.log("\nFolder structure is perceived as:");
		console.log(G.folderInfo);
         deleteFolder(startCopyJob); 
		
	});

})(require('fs'));
