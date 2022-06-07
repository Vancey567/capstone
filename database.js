const mongoose = require('mongoose');

function DbConnect() {
    const DB_URL = process.env.DB_URL;
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, "Unable to connect to database"));
    db.once('open', () => {
        console.log('MongoDb Connected...');
    })
}

module.exports = DbConnect;