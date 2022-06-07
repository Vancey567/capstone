const Products = require('../../models/productModel');

async function showProduct(req, res) {
    await Products.find()
    .then((data) => {
        res.json({data: data, status: 'success'});   
    }).catch((err) => {
        console.log(err);
        res.json({message: 'Problem Finding products', status: 'error'});   
    })
}

module.exports = showProduct;