var child_process = require('child_process');

child_process.exec('savebatch.bat', function(error, stdout, stderr) {
    
    console.log(stdout);
    
});