const express = require("express");
const app = express();

app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

// routes
app.get("/", function(req, res) {
  res.render("index.html");
});

app.get("/mercury", function(req, res) {
  res.render("mercury.html");
});
app.get("/venus", function(req, res) {
  res.render("venus.html");
});
app.get("/earth", function(req, res) {
  res.render("earth.html");
});
app.get("/saturn", function(req, res) {
  res.render("saturn.html");
});
app.get("/mars", function(req, res) {
  res.render("mars.html");
});


// server listener
var port = (process.env.PORT || "3000");
var ip = (process.env.IP || "localhost");

app.listen(port, ip, function() {
  console.log("Express server is Running on port: ", port);
});
