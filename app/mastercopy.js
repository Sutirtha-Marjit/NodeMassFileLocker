var path = require('path');
const http = require('http');
function MasterCopy(fs,target,listOfFiles,callBack){

    var StatusObject = {
        targetFolder:null,
        listOfFiles:[],
        success:false,
        copyComplete:-1,
        masterErrorObject:{},
        log:[]
    }

    var copyLog = function(obj){
        console.log(obj);
        StatusObject.log.push(obj);
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
        var localPromise;
        console.log('------------------------------------------');
        console.log('sourceFile:'+sourceFile);
        console.log('targetFile:'+targetFile);
        localPromise = new Promise(function(resolve,reject){
            var inputStream = fs.createReadStream(sourceFile);
            var outputStream = fs.createWriteStream(targetFile);
            inputStream.pipe(outputStream);
            
            outputStream.on('finish',function(){
                resolve();
            });
        });

        localPromise.then(function(){
            nextFileCopy();
            copyEndFunction();
        }).catch(function(error){
            copyLog(error);
            nextFileCopy();
            
        });
        
    };

    var getOnlyFileNamesFromList = function(){
        var onlyFileNames = [];
        var sourceFolderPath;
        listOfFiles.forEach(function(filePath){
            var lclArr = filePath.split('/');
            sourceFolderPath = filePath.replace(lclArr[lclArr.length-1],'');
            onlyFileNames.push(lclArr[lclArr.length-1]);
        });

        return {sourceFolderPath:sourceFolderPath, onlyFileNames:onlyFileNames};
    };

    var getRandomFileName = function(currentFileName){
        
        var arr,extension;
        arr = currentFileName.split('.');
        extension = '.'+arr[arr.length-1];

        console.log("File analisys: extension is "+extension);
        return ((Math.random()+"").replace("0.","img-"))+extension;
    }

    var allListFilesExists = function(){
        StatusObject.masterErrorObject.sourcefileIntactness = [];
        const anlObj = getOnlyFileNamesFromList();
        const fullListOfFiles = fs.readdirSync(anlObj.sourceFolderPath);
        var revisedListOfFiles = [];
        
        anlObj.onlyFileNames.forEach(function(givenFileName,n){
            if(fullListOfFiles.indexOf(givenFileName)!==-1){
                revisedListOfFiles.push(listOfFiles[n]);
            }else{
                StatusObject.masterErrorObject.sourcefileIntactness.push(listOfFiles[n]+" is not available to move");
            }
        });

        return revisedListOfFiles;        
    }

    var nextFileCopy = function(){
        //if(listOfFiles.length > StatusObject.copyComplete){
            StatusObject.copyComplete++;
            if(listOfFiles[StatusObject.copyComplete]){
                copyLog('Attempted for '+StatusObject.copyComplete+' th file');
                copySingleFile(listOfFiles[StatusObject.copyComplete],target+'/'+getRandomFileName(listOfFiles[StatusObject.copyComplete]),function(){
                   if(listOfFiles[StatusObject.copyComplete]){
                     copyLog(listOfFiles[StatusObject.copyComplete]+" copied successfully");
                   }                   
                })
            }else{
                copyLog('Copy operation completed at '+new Date());
                listOfFiles.forEach(function(toDelFName){
                    
                    fs.unlink(toDelFName, function (err) {
                    if (err) throw err;
                    console.log('successfully deleted '+toDelFName);
                    });
                    
                })
                callBack(StatusObject);
            }
            
        //}

    }
    
    
    var init = function(){
         var targetFolderStatus = directoryExists(target);
         StatusObject.listOfFiles = listOfFiles; 
         if(targetFolderStatus.status){
               
               listOfFiles = allListFilesExists(listOfFiles)
               StatusObject.listOfFilesOperational = listOfFiles; 
               nextFileCopy();
               

         }else{
             StatusObject.success = false;
             StatusObject.masterErrorObject.targetFolderStatus = targetFolderStatus.data;
             callBack(StatusObject);
         }
    }

    init();
    
}

module.exports = MasterCopy;