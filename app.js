const bodyParser = require('body-parser');
const express = require('express');
const useragent = require('express-useragent');
const cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(useragent.express());
app.use(cors());

app.get('/', (req, res) => {
    var ipAddress = req.ip;
    var software = `OS: ${req.useragent.os}, Browser: ${req.useragent.browser}`;
    var language = req.acceptsLanguages();


    res.json({ ipAddress, software, language });
});

app.listen(3000, () => {
    console.log('Server is up');
});