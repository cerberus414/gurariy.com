const exphbs = require('express-handlebars');
const path = require('path');

module.exports = {
    setup: function(viewsPath) {
        const hbs = exphbs.create({ 
            defaultLayout: 'layout',
            extname: '.handlebars',
            layoutsDir: path.resolve(viewsPath, './layouts'),
            partialsDir: path.resolve(viewsPath, './partials'),
            helpers: {
                scriptPath: '/public/scripts/site.js'
            }
        });
        return hbs.engine;
    }
};
