// const http = require("http");
const url = require("url");
// const  fs = require("fs");

var address = "http://localhost:8080/default.htm?girlfriend=may&job=programmer";
var q = url.parse(address, true);

console.log(q); //object
console.log(q.host); //returns "localhost:8080"
console.log(q.pathname); //returns "/default.htm"
console.log(q.search); //returns "?girlfriend=may&job=programmer"

var qdata = q.query; //returns an object {girlfriend: "may", job: "programmer" }
console.log(qdata.girlfriend); //returns "may"
