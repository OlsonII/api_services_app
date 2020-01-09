const express = require('express');
const morgan = require('morgan');
const colors = require('colors');

const app = express();


//settings
app.set('appName', 'First API REST');
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


const port = app.get('port');

//routes


//starting server
function startServer(){
    app.listen(port, () => {
        console.log('app on port'.green+'3000'.blue);
    });
}

app.startServer = startServer;

module.exports = app;