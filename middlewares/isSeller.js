const Sellers = require('../models/sellerModel');

async function isSeller(req, res, next) {
    if(req.user.role === 'seller') {
        return next();
    } else {
        res.status(403).json({message: "Forbidden"});
    }
}

module.exports = isSeller;