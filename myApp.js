let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", (req, res) => {
    res.send("Hello Express");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is listening on port ${port}...`);
});






























 module.exports = app;
