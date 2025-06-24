require('dotenv').config();

let express = require('express');
let app = express();

console.log("Hello World");

const publicPath = __dirname + "/public";
const indexPath = __dirname + "/views/index.html";

app.use("/public", express.static(publicPath));

app.get("/json", (req, res) => {
    let message = "Hello json";

    if (process.env.MESSAGE_STYLE == "uppsercase")
        message = message.toUpperCase();

    return res.json({ message });
});

app.get("/", (req, res) => {
    res.sendFile(indexPath);
});





























 module.exports = app;
