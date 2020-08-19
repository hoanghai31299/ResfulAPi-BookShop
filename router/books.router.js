const express = require('express');
const route = express.Router();
const controller = require('../controllers/books.controller')
route.get('/',controller.getAllBooks);

route.get('/search',controller.getBookByName);
route.get('/:id',controller.getBookById);

module.exports = route;