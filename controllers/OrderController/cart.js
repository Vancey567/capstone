const Cart = require('../../models/Cart')

if(user.isLoggedIn) {
    if(cartExist) { // when cart item >= 1 make it true
        Cart.findById(user.id)
        .then((data) => {
            res.status(200).json({cart: data, status: 'success'});
        }).catch((err) => {
            console.log(err);
            res.status(400).json({message: "Problem fetching Cart Data from Server!!", status: "error"});
        })
    } else {
        
    }
    
} else {
    localStorage.setItem("cart", data);
}