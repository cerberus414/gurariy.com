module.exports = function(app) {
    app.use('/', require('./controllers/home'));
    app.use('/home/', require('./controllers/home'));
};