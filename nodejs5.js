// const http = require("http");
const url = require("url");
const fs = require("fs");

var rs = fs.createReadStream("./demofile.txt"); //creates a read event stream out of the file
rs.on("open", function() {
  console.log("The file is open"); //this message is logged whenever demofile is opened
});
