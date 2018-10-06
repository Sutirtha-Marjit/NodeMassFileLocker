const fs = require('fs');

function normal(folderPath){
    let resultArray=[];
    let o = {status:false,resultArray:resultArray}
    if(fs.existsSync(folderPath)){
        var data = fs.readdirSync(folderPath);
        data.forEach(function(p,n){
        var dir,resultantPath = folderPath+"/"+p;
        dir = fs.lstatSync(resultantPath).isDirectory();
        

        resultArray.push({
            file:p,
            path:resultantPath,
            isDir:dir
        });

        });

        o.status= true;
        o.resultArray = resultArray;

    }
    
    return o;
}

function returnNumOfFiles(folderPath){
    let count=0;
    let data = fs.readdirSync(folderPath);
    let totalSubFolderFiles=0;
    console.log(folderPath);
    data.forEach(function(p,n){
        var dir,resultantPath = folderPath+"/"+p;
        dir = fs.lstatSync(resultantPath).isDirectory();
        
        if(!dir){
            count++;
        }else{
            //totalSubFolderFiles = totalSubFolderFiles + returnNumOfFiles(resultantPath);
            count = count + returnNumOfFiles(resultantPath);
        }
    });
    console.log(count+' files');
    count = count + totalSubFolderFiles;
    console.log('total:'+count+' files');
    return count;
    
}

function ultimate(folderPath){
    let resultArray=[];
    let o = {status:false,resultArray:resultArray};
    let c=0;

    if(fs.existsSync(folderPath)){

        var data = fs.readdirSync(folderPath);
        data.forEach(function(p,n){
        c=0;    
        var dir,resultantPath = folderPath+"/"+p;
        dir = fs.lstatSync(resultantPath).isDirectory();
        if(dir){
            c = c+returnNumOfFiles(resultantPath);
        }/*else{
            c++;
        }  */  
        
        resultArray.push({
            path:p,
            total:c
        });
       

        });

        o.status= true;        
        o.resultArray = resultArray;

    }

    return o;
}

function MasterAnalyze(folderPath,type){

    if(type==='ultimate'){
        return ultimate(folderPath);   
    }else{
        return normal(folderPath);
    }
}

module.exports = MasterAnalyze;