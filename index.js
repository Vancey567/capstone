require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const routes = require('./routers/routes');
const DbConnect = require('./database');

app.use(express.json());

DbConnect();

// routes
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(routes);

// 404 Page 
app.use((req, res, next) => {
    res.send()
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})