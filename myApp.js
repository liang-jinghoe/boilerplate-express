let express = require('express');
let app = express();

console.log("Hello World");

const publicPath = __dirname + "/public";
const indexPath = __dirname + "/views/index.html";

const s = express.static(publicPath);

app.use("/public", s);

app.get("/", (req, res) => {
    res.sendFile(indexPath);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
});






























 module.exports = app;
