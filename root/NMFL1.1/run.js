var config = require('./config/masterconfig.js');
var SingleFileCopy = require('./engine/singlefilecopy.js');

var sfc = new SingleFileCopy();
sfc.fileCopy({source:'data3.cab',destination:'neuta.vil'});