module.exports = function(app) {
    app.use('/', require('./controllers/redirect'));
    app.use('/home/', require('./controllers/home'));
};