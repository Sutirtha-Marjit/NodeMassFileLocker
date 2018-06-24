const fs = require('fs');

function MasterAnalyze(folderPath){
    
    var resultArray=[],data = fs.readdirSync(folderPath);
    data.forEach(function(p,n){
        var dir,resultantPath = folderPath+"/"+p;
        dir = fs.lstatSync(resultantPath).isDirectory();

        resultArray.push({
            file:p,
            path:resultantPath,
            isDir:dir
        });

    });

    return resultArray;


}

module.exports = MasterAnalyze;