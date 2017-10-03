const path = require('path');
const express = require('express');
const handlebarsViewEngine = require('./server/handlebars-view-engine');

const viewsPath = path.resolve(__dirname, './server/views');

const app = express();

// Register handlebars as a view engine
app.engine('handlebars', handlebarsViewEngine.setup(viewsPath));
// Set path for the views/templates so they can be found by the view engine
app.set('views', viewsPath);
// Register handlebars as the default view engine when view/template extension isn't specified in the controller
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.resolve(__dirname, './public')));
app.use('/home', require('./server/controllers/home'));
app.use('/', require('./server/controllers/home'));

app.listen(process.env.PORT, process.env.HOSTNAME, function() {  
    console.log('Express listening on port %d', process.env.PORT);
});