const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sellerSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: Number, required: true, unique: true},
    address: {type: String, required: true},
    openTime: {type: String, required: true},
    closeTime: {type: String, required: true},
    password: {type: String, required: true},
    items: [{type: Schema.Types.ObjectId, ref: "Product"}]
}, {timestamps: true})

const sellerModel = mongoose.model('Seller', sellerSchema);
module.exports = sellerModel;
// items should have stars and review
// https://www.mongodb.com/docs/manual/tutorial/model-embedded-one-to-many-relationships-between-documents/
// Check this for review