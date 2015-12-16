'use strict'

module.exports = class productController {

    constructor() {
        this.products = new Array();
    }

    get(req, res) {
        res.send(200,this.products);
    }

    post(req, res) {

        let product = req.body;

        this.products.push(product);

        res.send(201,res.header('Location', '/api/products/' + product.sku));
    };
}
