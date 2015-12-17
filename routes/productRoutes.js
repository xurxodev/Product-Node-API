"use strict"

var productController = require('../controllers/productController.js');

module.exports = class Routes {
    static register(server) {

        const controller = new productController();

        server.get('/api/products/', (req,res,next) =>
        {
            controller.get(req,res);
            next();
        });

        server.post('/api/products/', (req,res,next) =>
        {
            controller.post(req,res);
            next();
        });
    }
}
