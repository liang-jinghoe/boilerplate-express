require('dotenv').config();

let express = require('express');
let app = express();

console.log("Hello World");

const publicPath = __dirname + "/public";
const indexPath = __dirname + "/views/index.html";

app.use("/public", express.static(publicPath));

app.use((req, res, next) => {
    const method = req.method;
    const path = req.path;
    const ip = req.ip;

    console.log(`${method} ${path} - ${ip}`);

    next();
});

app.get("/json", (req, res) => {
    let message = "Hello json";

    if (process.env.MESSAGE_STYLE == "uppercase")
        message = message.toUpperCase();

    res.json({ message });
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();

    next();
}, (req, res) => {
    res.json({ time: req.time });
});

app.get("/:word/echo", (req, res) => {
    const { word } = req.params;

    res.send({ echo: word });
});

app.get("/", (req, res) => {
    res.sendFile(indexPath);
});





























 module.exports = app;
