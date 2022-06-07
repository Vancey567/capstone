const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String, required: true},
    storeId: {type: String, required: true},
    rate: {type: Number, required: true},
    description: {type: String, required: true},
    category: {type: String, required: true},
    type: {type: String, enum: ["Veg", "Non-Veg"]},
    weight: {type: Number},
    height: {type: Number},
    width: {type: Number},
    size: {type: Number},
    stars: {type: Number, default: 0},
    reviews: [{type: String}]
})

const productModel = mongoose.model('Product', productSchema);
module.exports = productModel;