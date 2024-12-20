const express = require('express');
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const detailsRouter = require('./routes/detailsRouter');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/details', detailsRouter);
app.use('/new', newRouter);
app.use('/', indexRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});