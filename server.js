var express = require("express");
var http = require("http");
var routes = require("./routes");

var app = express();

app.configure(function(){
    app.set("port", process.env.PORT || 3000);
    app.use("/static", express.static(__dirname + "/public"));
});

app.configure("development", function(){
    app.use(express.errorHandler());
});

app.get("/", routes.all);
app.post("/", routes.add);

http.createServer(app).listen(app.get("port"), function(){
    console.log("Deck Remote Server listening on port " + app.get("port"));
});
