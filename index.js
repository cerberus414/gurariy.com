const path = require('path');
const express = require('express');
//const routes = require('./server/routes');
const handlebarsViewEngine = require('./server/handlebars-view-engine');

const viewsPath = path.resolve(__dirname, './server/views');

const app = express();

app.engine('handlebars', handlebarsViewEngine.setup(viewsPath));
app.set('views', viewsPath);
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.resolve(__dirname, './public')));
app.use('/home', require('./server/controllers/home'));
app.use('/', require('./server/controllers/home'));

//routes(app);

app.listen(process.env.PORT, process.env.HOSTNAME, function() {  
    console.log('Express listening on port %d', process.env.PORT);
});