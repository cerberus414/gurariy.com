const exphbs = require('express-handlebars');
const path = require('path');

module.exports = {
    setup: function(viewsPath) {
        const hbs = exphbs.create({ 
            defaultLayout: 'layout',
            layoutsDir: path.resolve(viewsPath, './layouts'),
            partialsDir: path.resolve(viewsPath, './partials')
        });
        return hbs.engine;
    }
};
