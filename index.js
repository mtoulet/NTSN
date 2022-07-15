const express = require('express');
const router = require('./app/router');


const port = process.env.PORT || 3000;

const app =express();

app.use(express.static(path.join(__dirname, './assets')))

app.use(router);

app.listen(port => {
    console.log(`http://localhost:${port}`);
 });

