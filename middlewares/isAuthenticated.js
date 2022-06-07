const secretKey = process.env.secretKey;

function verifyTokenMiddleware(req, res, next) {
    if(req.headers.authorization !== undefined) { 
        let token = req.headers.authorization.split(" ")[1]; 
        // Verify the token
        jwt.verify(token, secretKey, (err, userCred) => { 
            console.log(err);
            if(err === null) {
                console.log(token);
                next();
            } else {
                console.log(err);
                res.status(401).send({message: "Invalid Token"});
            }
        })
    } else {
        res.status(403).send({ message: "Please authenticate yourself"});
    }
}

module.exports = verifyTokenMiddleware;