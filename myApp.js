let express = require('express');
let app = express();

console.log("Hello World");

const indexPath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
    res.sendFile(indexPath);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
});






























 module.exports = app;
