const fs = require('fs');

function MasterAnalyze(folderPath){

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

module.exports = MasterAnalyze;