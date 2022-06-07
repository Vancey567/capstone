const Sellers = require('../../../models/sellerModel');
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const secretKey = process.env.SECRET_KEY;

async function login(req, res) {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.json({message: 'All fields are mandatory', status: false});
    }

    await Sellers.findOne({ email: email })
    .then((seller) => {
        if(seller === null) {
            return res.json({message: "No Such Seller Exist!!", status: false});
        }

        bcryptjs.compare(password, seller.password, (err, status) => {
            if(status) { // correct password
                jwt.sign({email, password}, secretKey, (err, token) => {
                    if(err === null) {
                        res.send({seller: seller, token: token, status: true});
                    }
                })
            } else {
                res.json({message: "Incorrect Password", status: false})
            }
        })
    }).catch((err) => {
        console.log(err);
        return res.json({ message: err.message, status: false});
    })

}

module.exports = login