const Products = require('../../models/productModel');

async function deleteProduct(req, res) {
    const pid = req.query.pid;
    
    // await Products.deleteOne({ _id: pid }) // this also works
    await Products.findByIdAndRemove(pid)
    .then((item) => {
        console.log(`Product deleted ${item}`);
        res.json({message: 'Product deleted', status: 'success'});   
    }).catch((err) => {
        console.log(err);
        res.json({message: 'Problem Deleting product', status: 'error'});
    })
}

module.exports = deleteProduct;