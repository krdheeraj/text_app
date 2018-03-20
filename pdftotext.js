
//var pdfUtil = require('pdf-to-text');
//var pdf_path = "output.pdf";
 
//pdfUtil.info(pdf_path, function(err, info) {
  //  if (err) throw(err);
 //   console.log(info);
//});

var path = require('path')
var filePath = path.join(__dirname, 'output.pdf')
var extract = require('pdf-text-extract')
extract(filePath, function (err, pages) {
  if (err) {
    console.dir(err)
    return
  }
  console.dir(pages)
})