var path = require('path');
function MasterCopy(fs,target,listOfFiles,callBack){

    var StatusObject = {
        targetFolder:null,
        success:false,
        masterErrorObject:null
    }

    var directoryExists = function(targetFolder){
        var targetFolderStatus={status:false,data:null};
        StatusObject.targetFolder = targetFolder;
        console.log('Checking target folder at "'+targetFolder+'"');
        try{
            targetFolderStatus.data = fs.readdirSync(targetFolder);
            if(targetFolderStatus.data!==null){
                targetFolderStatus.status = true;
            }
            }catch(e){
                targetFolderStatus.data = e;                
            }

            return targetFolderStatus;
    }

    var copySingleFile = function(sourceFile,targetFile,copyEndFunction){

    };

    var allListFilesExists = function(){
        //var inputStream  = fs.createReadStream(listOfFiles[0]);
        //var outputStream = fs.createWriteStream();

    }
    
    
    var init = function(){
         var targetFolderStatus = directoryExists(target); 
         if(targetFolderStatus.status){
                allListFilesExists(listOfFiles)

         }else{
             StatusObject.success = false;
             StatusObject.masterErrorObject = targetFolderStatus.data;
             callBack(StatusObject);
         }
    }

    init();
    
}

module.exports = MasterCopy;