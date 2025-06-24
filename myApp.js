let express = require('express');
let app = express();

console.log("Hello World");

const publicPath = __dirname + "/public";
const indexPath = __dirname + "/views/index.html";

app.use("/public", express.static(publicPath));

app.get("/index", (req, res) => {
    res.sendFile(indexPath);
});






























 module.exports = app;
