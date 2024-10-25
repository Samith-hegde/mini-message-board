const { Router } = require('express');
const messages = require('../models/messages');

const detailsRouter = Router();

detailsRouter.get('/:_id', (req, res) => {
    res.render('details', { title: "Message Details", message: messages.findMessage(parseInt(req.params._id)) });
})

module.exports = detailsRouter;