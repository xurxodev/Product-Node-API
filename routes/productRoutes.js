"use strict"

var knowronController = require('../controllers/productController.js');

module.exports = class Routes {
    static register(server) {

        const controller = new knowronController();

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
