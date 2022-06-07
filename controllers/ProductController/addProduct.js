const Products = require('../../models/productModel');

function addProduct(req, res) {
    let { name, sellerId, description, rate, category, type, weight, height, width, size, stars, reviews } = req.body;
    
    if(!name || !sellerId || !description || !rate || !category || !type || !weight || !height || !width || !size || !stars || !reviews) {
        return res.json({ message: 'All fields are mandatory', status: 'error'});
    }

    let productObj = new Products({
        name, sellerId, description, rate, category, type, weight, height, width, size, stars, reviews
    })

    productObj.save()
    .then(() => {
        res.json({ message: 'Item added to Product List', status: 'success'});
    }).catch((err) => {
        res.json({message: "Problem adding item to Product List!!", status: 'error'});
    })
}

module.exports = addProduct;