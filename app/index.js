const port = 3000;
const express = require("express");
const bodyparser = require('body-parser');
const getAResultObject = require('./masteroutputobject');
const app = express();
const fs = require('fs');
const MasterCopy = require("./mastercopy");
const MasterAnalyze = require("./masteranalyze");
const folderConfig = {
    root:'./operations/',
    destRoot:'./operations/dest/',
    sourceRoot:'./operations/source/'
};

app.use(bodyparser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyparser.json()); // support json encoded bodies


/*
app.use(express.json()); // support json encoded bodies
app.use(express.urlencoded({ extended: true })); // support encoded bodies
*/

app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });




app.get('/service/get/check-status/',(req,res)=>{
    let o = getAResultObject();
    const destStatus = fs.existsSync(folderConfig.destRoot);
    const sourceStatus = fs.existsSync(folderConfig.sourceRoot);
    o.meta.detailedStatus.sourceReady = sourceStatus;
    o.meta.detailedStatus.destReady = destStatus;
    o.meta.status = destStatus && sourceStatus;
    
    res.json(o);
});

app.get('/service/get/get-folder-details/',(req,res)=>{
   let o = getAResultObject();
   let finalPath ='./operations';
   o.meta.detailedStatus = {requestedTo:finalPath}

   if(finalPath.length>0){
    let arr = MasterAnalyze(finalPath);
    o.meta.status = arr.status;
    o.data.resultObject = arr.resultArray;
    if(!arr.status){
        o.meta.message = `No such file or directory found as <${finalPath}>, Please check again`;
    }
    res.json(o);
}else{
    o.meta.message = "No parameters have been passed";
    res.json(o);
}
 
});


app.get('/service/get/get-folder-details/:path',(req,res)=>{
    let o = getAResultObject();
    let finalPath = `${req.params.path}`.split('$').join('/');
    finalPath = `${folderConfig.root}${finalPath}`;
    o.meta.detailedStatus = {requestedTo:finalPath}
    
    if(finalPath.length>0){
        let arr = MasterAnalyze(finalPath);
        o.meta.status = arr.status;
        o.data.resultObject = arr.resultArray;
        if(!arr.status){
            o.meta.message = `No such file or directory found as <${finalPath}>, Please check again`;
        }
        res.json(o);
    }else{
        o.meta.message = "No parameters have been passed";
        res.json(o);
    }
});

app.post('/service/post/cut-and-paste',(req,res)=>{
    
    if(req.body.source){
        
    }
    let o = getAResultObject();
    o.meta.detailedStatus = {requestedTo:''};
    res.json(o);
});



app.use(express.static('./AllotmentFronEnd/dist/AllotmentFronEnd/'));  
app.use('/operations',express.static('./operations/'));



app.listen(port,function(){
    console.log('Application running on '+port);
 });
 