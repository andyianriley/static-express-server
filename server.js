const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();
const port = process.env.PORT || 8080;
const baseUri = process.env.BASE_URI || '/';

app.use(compression());
app.use(baseUri, express.static(path.join(__dirname, 'static')));

app.get(baseUri, function (req, res) {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.listen(port);
