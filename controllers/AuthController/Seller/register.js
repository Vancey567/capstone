const bcryptjs = require('bcryptjs');
const Sellers = require('../../../models/sellerModel');

function register(req, res) {
    let { name, email, phone, address, password, openTime, closeTime } = req.body;

    if(!name || !email || !phone || !openTime || !closeTime || !address || !password) {
        return res.json({ message: 'All fields are mandatory', status: false });
    }
    
    Sellers.findOne({ email: email }, (err, seller) => {
        if(err) {
            return res.json({ message: err.message });
        }

        if(!seller) {
            bcryptjs.genSalt(10, (err, salt) => {
                if(err === null) {
                    bcryptjs.hash(password, salt, (err, hashedPassword) => {
                        let sellerObj = new Sellers({ 
                            name: name,
                            email: email,
                            phone: phone,
                            openTime: openTime ,
                            closeTime: closeTime ,
                            address: address,
                            password: hashedPassword
                        })
                        
                        sellerObj.save()
                        .then(() => {                           
                            res.json({message: "Seller Registered", status: true});
                        }).catch((err) => {
                            res.json({message: "Problem registering the seller!!", status: false});
                        })
                    })
                } else {
                    console.log(err);
                }
            })
        } else {
            console.log('seller already registered');
            res.json({message: "Seller already registered, Please login!!!"})
        }
    })
}

module.exports = register;