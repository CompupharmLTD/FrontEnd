var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var signupRouter = require('./routes/signup');
var signinRouter = require('./routes/signin');
var productRouter = require('./routes/products');
var contactRouter = require('./routes/contact');
var outletsRouter = require('./routes/outlets');
var aboutRouter = require('./routes/about');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/signin', signinRouter);
app.use('/products', productRouter);
app.use('/contact', contactRouter);
app.use('/outlets', outletsRouter);
app.use('/about', aboutRouter);

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
