'use strict'

module.exports = class productController {

    constructor() {
        this.products = new Array();
    }

    get(req, res) {
        res.send(200,this.products);
    }

    post(req, res) {

        var product = {
            sku:   req.body.sku,
            asin:  req.body.asin,
            upc:   req.body.upc,
            title: req.body.title,
            image: req.body.image
        };


        this.products.push(product);

        res.send(201,res.header('Location', '/api/products/' + product.sku));
    };
}
