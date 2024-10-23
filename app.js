const express = require('express');
const path = require('node:path');

const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/new', newRouter);
app.use('/', indexRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});