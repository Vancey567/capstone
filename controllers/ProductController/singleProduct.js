const Product = require('../../models/productModel')


function singleProduct() {
    return {
        async show(req, res) {
            const productId = req.query.id;
            const product = await Product.findById(productId);
            res.status(200).json({ product: product, status: 'success' });
        },
    }
}

module.exports = singleProduct