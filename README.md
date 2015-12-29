# Product Node API
Sample REST API written in Node.js to show some of the best practices as design patterns, testing and appropriate architecture.

## Setup

### Install Node.js and clone project

* Download from [Node.js web](brew install node) or from brew for OSX `brew install node`
* `git clone https://github.com/xurxodev/Catalog-API.git`

### Install modules and mocha

* `$ cd [your project path]`
* `$ nmp install`
* Install mocha globally `$ npm install -g mocha`

### Run API REST

* `$ cd [your project path]`
* `$ node app.js`

### Run tests running API REST previously

* `$ cd [your project path]`
* `$ mocha`

## Products endpoint

* POST /api/products
```http
POST /api/products HTTP/1.1
Host: localhost:8080
Content-Type: application/json
Cache-Control: no-cache

{
    "sku": "ab48cicj36734",
    "asin": "B015E8UTIU",
    "upc": "888462500449",
    "title": "Apple iPhone 6s 64 GB US Warranty Unlocked Cellphone - Retail Packaging (Rose Gold)",
    "image": "http://ecx.images-amazon.com/images/I/91DpCeCgSBL._SL1500_.jpg"
}
```

```http
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 29
Content-Type: application/json
Date: Thu, 24 Dec 2015 16:42:23 GMT
Location: /api/products/ab48cicj36734
```

```http

```
* GET /api/products
```http
GET /api/products HTTP/1.1
Host: localhost:8080
```

```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 233
Content-Type: application/json
Date: Thu, 24 Dec 2015 16:46:26 GMT

[
  {
    "sku": "ab48cicj36734",
    "asin": "B015E8UTIU",
    "upc": "888462500449",
    "title": "Apple iPhone 6s 64 GB US Warranty Unlocked Cellphone - Retail Packaging (Rose Gold)",
    "image": "http://ecx.images-amazon.com/images/I/91DpCeCgSBL._SL1500_.jpg"
  }
]
```

## Best practices used

* MVC presentation layer pattern
* End to End Testing

## Libraries used on the sample project

* [Restify](http://restify.com/)
* [Mocha](https://mochajs.org/)

Developed By
------------

* Jorge Sánchez Fernández aka [xurxodev](https://twitter.com/xurxodev)

License
-------

    Copyright 2015 Jorge Sánchez Fernández

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
