const express = require('express');
const routes = require('./server/routes')
const app = express();

routes(app);

app.listen(process.env.PORT, process.env.HOSTNAME, function() {  
    console.log('Express listening on port %d', process.env.PORT);
});