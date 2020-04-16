// const http = require("http");
// const url = require("url");
const fs = require("fs");

fs.open("mynewfile2.txt", "w", function(err, file) {
  if (err) throw err;
  console.log("Saved!");
});
