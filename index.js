const express = require('express');
const app = express();

app.get('/home', function (req, res) {
    res.send('Hello World!');
});

app.listen(process.env.PORT, process.env.HOSTNAME, function() {  
    console.log('Express listening on port %d', process.env.PORT);
});