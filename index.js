const path = require('path');
const express = require('express');
const router = require('./app/router');
require('dotenv').config();


const port = process.env.PORT || 3000;

const app =express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './assets')))

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(router);


app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(port => {
    console.log(`http://localhost:${port}`);
 });

