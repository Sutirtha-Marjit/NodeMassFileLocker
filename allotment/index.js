const port = 3000;
const express = require("express");
const app = express();
const fs = require('fs');
const destFolders = ["model","outbox"];
const MasterCopy = require("./mastercopy");
const folderConfig = {
    destRoot:'./operations/dest/',
    sourceRoot:'./operations/source/'
};



var folderReadRouting = function(routeFolderName){
    console.log('folderReadRouting>'+routeFolderName);
    var routePath = '/service/basic-list/'+routeFolderName;
    app.get(routePath,function(req,res){
   
        listPopulate(function(data){
            res.json(data);
        },routeFolderName);
   
    });
};


var listPopulate = function(callback,foldarName){
    const readPromise = new Promise(function(resolve,reject){
        var resultArray = [];
        var folderPath = folderConfig.destRoot+foldarName;
        var data = fs.readdirSync(folderPath);
        data.forEach(function(p){
            var subFolderData=[],resultantPath = folderPath+"/"+p;
            var dir = fs.lstatSync(resultantPath).isDirectory();            
            if(dir){
                subFolderData = fs.readdirSync(resultantPath);
            }
              resultArray.push({
                   uri:resultantPath,
                   name:p,
                   directory:dir,
                   subfolderData:subFolderData
               });
            
            
        })
        resolve(resultArray);
    });

    readPromise.then(function(data){
        callback(data);
    }).catch(function(reason){
        callback(reason);
    })
    
};


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/service/jobs/mastercopy',function(req,res){

    var givenData = {"target":"./operations/dest/outbox/analytics","resourcePathList":["./operations/source/1212132.jpg","./operations/source/1212wq212wqw2.jpg","./operations/source/2133124sasda.jpg"]}; 
    MasterCopy(fs,givenData.target,givenData.resourcePathList,function(data){
        res.json(data);
    });

});

app.get('/service/basic-list/source',function(req,res){
  var resultArray = [];
  var data = fs.readdirSync(folderConfig.sourceRoot);
  data.forEach(function(p){
      resultArray.push({
          uri:folderConfig.sourceRoot+p,
          name:p
      })
  });
  res.json(resultArray);
});

app.get('/test-connection',function(req,res){
    res.json({
        test:'success',
        date:(new Date())
    });
})



destFolders.forEach(function(p){
    folderReadRouting(p);
})






app.use(express.static('./AllotmentFrontEnd/dist'));
app.use('/operations/source/',express.static('./operations/source'));

app.listen(port,function(){
   console.log('Application running on '+port);
});

