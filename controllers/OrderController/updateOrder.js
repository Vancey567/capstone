const Orders = require('../../models/order');

async function updateOrder(req, res) {
    const oid = req.query.pid;
    const data = req.body;
    
    await Orders.findOneAndUpdate(oid, data)
    .then((item) => {
        res.status(200).json({message: 'Order updated', status: 'success'});   
    }).catch((err) => {
        console.log(err);
        res.json({message: 'Problem Updating Order', status: 'error'});   
    })
}

module.exports = updateOrder;