let express = require('express');
let app = express();

console.log("Hello World");

const stylePath = __dirname = "/public/style.css";
const indexPath = __dirname + "/views/index.html";

app.use("/", express.static(stylePath));

app.get("/", (req, res) => {
    res.sendFile(indexPath);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
});






























 module.exports = app;
