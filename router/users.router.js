const express = require('express');
const route = express.Router();

const controller = require('../controllers/users.controller');

route.get('/',controller.getAllUsers);
route.get('/:userId',controller.getUserById);
route.delete('/delete/:userId',controller.deleteUser);
route.put('/update/:userId',controller.updateUser);
route.post('/create',controller.createUser);

module.exports = route;