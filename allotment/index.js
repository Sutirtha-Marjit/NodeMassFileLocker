const port = 3000;
const express = require("express");
const bodyparser = require('body-parser');
const app = express();
const fs = require('fs');
const destFolders = ["model","outbox"];
const MasterCopy = require("./mastercopy");
const requestJsonParser = bodyparser.json();
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
                var sData = fs.readdirSync(resultantPath);
                sData.forEach(function(fname){
                    var subdir = fs.lstatSync(resultantPath+"/"+fname).isDirectory();
                    if(subdir){
                        subFolderData.push(fname);
                    }
                });
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

app.post('/service/jobs/createnewfolder',requestJsonParser,function(req,res){
    console.log('Requested for new folder creation...')
    var folderCreated=0, foldarPath,givenData;
    if(req.body){
        givenData = req.body;
        for(var el in givenData){
            foldarPath = folderConfig.destRoot+givenData[el];
            if (!fs.existsSync(foldarPath)){
                fs.mkdirSync(foldarPath);
                folderCreated++;
            }
             
        }
    }
    res.json({status:{folderCreated:folderCreated}});

});

app.post('/service/jobs/mastercopy',requestJsonParser,function(req,res){
    var givenData=[];
    if(req.body){
        givenData = req.body;
        MasterCopy(fs,givenData.target,givenData.resourcePathList,function(data){
        res.json(data);
        });
    }else{
        res.json({status:false});
    }

});

app.get('/service/basic-list/source',function(req,res){
  var resultArray = [];
  var data = fs.readdirSync(folderConfig.sourceRoot);
  data.forEach(function(p){
      var isDir = fs.lstatSync(folderConfig.sourceRoot+'/'+p).isDirectory();
      
      resultArray.push({
          uri:folderConfig.sourceRoot+p,
          name:p,
          isDir:isDir
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

