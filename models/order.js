const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true,
    },
    items: {
        type: Object,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    customize: {
        type: String
    },
    paymentType: {
        type: String,
        default: 'COD',
    },
    paymentStatus: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        default: 'order_placed',
    },
}, { timestamps: true })

const orderModel = mongoose.model('Order', orderSchema);
module.exports = orderModel;