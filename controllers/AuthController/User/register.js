const bcryptjs = require('bcryptjs');
const Users = require('../../../models/userModel');

function register(req, res) {
    let { name, email, phone, dob, address, password } = req.body;

    if(!name || !email || !phone || !dob || !address || !password) {
        return res.json({ message: 'All fields are mandatory', status: false });
    }

    Users.findOne({ email: email }, (err, user) => {
        if(err) {
            return res.json({ message: err.message });
        }

        if(!user) {
            bcryptjs.genSalt(10, (err, salt) => {
                if(err === null) {
                    bcryptjs.hash(password, salt, (err, hashedPassword) => {
                        let userObj = new Users({ 
                            name: name,
                            email: email,
                            phone: phone,
                            dob: dob,
                            address: address,
                            password: hashedPassword
                        })

                        userObj.save()
                        .then(() => {
                            res.json({message: "User Registered", status: true});
                        }).catch((err) => {
                            console.log(err);
                            res.json({message: "Problem creating the user!!", status: false});
                        })
                    })
                } else {
                    console.log(err);
                }
            })
        } else {
            res.json({message: "User already registered, Please login!!!"})
        }
    })
}

module.exports = register;