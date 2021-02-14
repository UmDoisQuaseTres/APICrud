const express = require('express');
const StorageController = require('../controllers/storageController');
const routes = express.Router();

routes.get('/storage', StorageController.list);
routes.get('/storage/:id', StorageController.show);
routes.post('/storage', StorageController.create);
routes.put('/storage/:id', StorageController.update);
routes.delete('/storage/:id', StorageController.delete);

module.exports = routes;