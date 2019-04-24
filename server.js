var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text);
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

var port = process.env.Port || 3000;

app.listen(port, () => console.log("Listening on port ", port)
);