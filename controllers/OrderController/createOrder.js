const Orders = require('../../models/order');

function createOrder(req, res) {
    let { customerId, sellerId, items, phone, address, customize, paymentType, paymentStatus, status } = req.body;
    
    if(!customerId || !sellerId || !items || !phone || !address || !customize || !paymentType || !paymentStatus || !status) {
        return res.json({ message: 'All fields are mandatory', status: 'error'});
    }

    let orderObj = new Orders({
        customerId, sellerId, items, phone, address, customize, paymentType, paymentStatus, status
    })

    orderObj.save()
    .then(() => {
        res.status(200).json({ message: 'Order Successfull', status: 'success'});
    }).catch((err) => {
        console.log(err);
        res.json({message: "Problem Creating Order!!", status: 'error'});
    })
}

module.exports = createOrder;