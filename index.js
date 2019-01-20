const path = require("path");
const express = require("express");
const app = express();


app.use("/", (request, response, next) => {
  response.sendFile(path.join(__dirname, "index.html"));
});


app.listen(3000);
