//import express from 'express'; // or the oldway: const express = require('express')

const express = require ('express');
const chalk = require('chalk');
const path = require('path');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const productsRouter = express.Router();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs') ;

productsRouter.route('/').get((req, res)=> {
    res.send('hello products');
});

productsRouter.route('/1').get((req, res)=> {
    res.send('hello single product');
});

app.use('/products', productsRouter);

// listen to root or localhost
app.get('/', (req, res)=>{
    //res.send('Hello from my node app');
    res.render('index', {title: 'Globomantics', data: ['Electronics', 'Furnitures', 'Stationary']});
});

app.listen(3000, ()=>{
    debug(`listening on port ${chalk.green('3000')}`);
    //console.log(`listening on port ${chalk.green('3000')}`);
});

