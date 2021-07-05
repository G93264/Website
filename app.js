const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const ejsMate = require('ejs-mate');
const viewRouter = require('./routes/viewRoutes');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/AppError');
const dotenv = require('dotenv');
const globalErrorHandler = require('./controllers/errorController');
const cookieParser = require('cookie-parser');

const app = express();

// Connects app to the configuration file
dotenv.config({ path: './config.env' });

// Set rendering engine
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Implementing CORS
app.use(cors());
app.options('*', cors());

// Serving Static HTML and JS files from the frontend
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/my-account', (req, res, next) => {
  res.status(200).json({
    data: 'This is my account',
  });
});

// Body parser
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(cookieParser());

// Test Middleware
app.use((req, res, next) => {
  //console.log(req.cookies);
  next();
})

app.use((req, res, next) => {
  res.locals.user = req.user;
  console.log(req.user);
  next();
})

// Routes
app.use('/', viewRouter);
app.use('/api/v1/users', userRouter);




// 404 for not defined pages
app.all('*', (req, res, next) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
