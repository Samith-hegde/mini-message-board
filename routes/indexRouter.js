const { Router } = require('express');
const messages = require('../models/messages');

const indexRouter = Router();
 
indexRouter.get('/', (req, res) => {
    res.render('index', { title: "Mini Message Board", messages: messages.getMessages() });
})

indexRouter.post('/new', (req, res) => {
    messages.addMessage({
        _id: messages.getMessages().length + 1,
        text: req.body.text,
        user: req.body.user,
        added: new Date()
    });
    res.redirect('/');
})

module.exports = indexRouter;