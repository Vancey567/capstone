const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    items: [{type: Object, }]
})

const cartModel = mongoose.model('Cart', cartSchema);
module.exports = cartModel;