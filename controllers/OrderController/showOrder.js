const Orders = require('../../models/order');

async function showOrder(req, res) {
    await Orders.find()
    .then((data) => {
        res.status(200).json({data: data, status: 'success'});   
    }).catch((err) => {
        console.log(err);
        res.json({message: 'Problem Finding Orders', status: 'error'});   
    })
}

module.exports = showOrder;