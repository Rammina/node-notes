const express = require("express"); //requires express module
const app = express(); //creates an express app

app.get("/", (req, res) => {
  //is a route definition, the callback function is called whenever there is an HTTP get request with the pathname of '/'
  res.send(".");
  // calls send on the response
});
app.listen(3001, () => {
  //starts up the server on port 3001
  console.log("listen2:3001");
});
