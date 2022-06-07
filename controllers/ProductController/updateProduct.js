const Products = require('../../models/productModel');

async function updateProduct(req, res) {
    const pid = req.query.pid;
    const data = req.body;
    
    await Products.findOneAndUpdate(pid, data)
    .then((item) => {
        res.status(200).json({message: 'Product updated', status: 'success'});   
    }).catch((err) => {
        console.log(err);
        res.json({message: 'Problem Updating product', status: 'error'});   
    })
}

module.exports = updateProduct;