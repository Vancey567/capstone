const Users = require('../../../models/userModel');
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const secretKey = process.env.SECRET_KEY;

async function login(req, res) {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.json({message: 'All fields are mandatory', status: false});
    }

    await Users.findOne({ email: email })
    .then((user) => {
        if(user === null) {
            return res.json({message: "No Such User Exist!!", status: false});
        }

        bcryptjs.compare(password, user.password, (err, status) => {
            if(status) { // correct password
                jwt.sign({email, password}, secretKey, (err, token) => {
                    if(err === null) {
                        res.send({user: user, token: token, status: true});
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