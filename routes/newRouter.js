const { Router } = require('express');

const newRouter = Router();

newRouter.get('/', (req, res) => {
    res.render("form", { title: "Mini Message Board" });    
})

module.exports = newRouter;