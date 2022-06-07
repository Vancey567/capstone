const Orders = require('../../models/order');

async function deleteOrder(req, res) {
    const oid = req.query.oid;
    
    await Orders.findByIdAndRemove(oid)
    .then((item) => {
        res.status(200).json({message: 'Order deleted Successfully', status: 'success'});   
    }).catch((err) => {
        console.log(err);
        res.json({message: 'Problem Deleting Order', status: 'error'});
    })
}

module.exports = deleteOrder;