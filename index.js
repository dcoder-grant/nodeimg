var http = require('http'); // create an http server to handle requests and response
http.createServer(function (req, res) { // sending a response header of 200 OK
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // print out Hello World
    res.end('Hello World\n'); // use port 8080
}).listen(8080);
console.log('Server running on port 8080.');


const PDF2Pic = require("pdf2pic");

const pdf2pic = new PDF2Pic({
  density: 100,           // output pixels per inch
  savename: "untitled",   // output file name
  savedir: "/opt/app-root/src/images",    // output file location
  format: "png",          // output file format
  size: "600x600"         // output size in pixels
});

pdf2pic.convert("hello-world.pdf").then((resolve) => {
  console.log("image converter successfully!");

  return resolve;
});