var fs = require('fs')
var conversion = require("phantom-html-to-pdf")();
var resulthtml="";
resulthtml+='<div>';
resulthtml+='<h1>hello first page</h1></h1>';
resulthtml+='</div>';

conversion({ html: resulthtml}, function(err, pdf) {
  var output = fs.createWriteStream('output.pdf')
  //console.log(pdf.logs);
  //console.log(pdf.numberOfPages);
    // since pdf.stream is a node.js stream you can use it
    // to save the pdf to a file (like in this example) or to
    // respond an http request.
  pdf.stream.pipe(output);
  
});