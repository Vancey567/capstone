const Orders = require('../../models/order');

async function cancelOrder(req, res) {
    const orderid = req.query.oid;
    const data = {
        "status": "cancelled"
    }
    await Orders.findOneAndUpdate(orderid, data)
    .then((order) => {
        res.status(200).json({message: 'Order Cancelled Successfully', status: 'success'});   
    }).catch((err) => {
        console.log(err);
        res.json({message: 'Problem Cancelling Order, Try Again!!', status: 'error'});   
    })
}

module.exports = cancelOrder;