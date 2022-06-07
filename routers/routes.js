const router = require('express').Router();

// const homeController = require('./controller/home-controller');
const register = require('../controllers/AuthController/User/register');
const login = require('../controllers/AuthController/User/login');
const registerSeller = require('../controllers/AuthController/Seller/register');
const loginSeller = require('../controllers/AuthController/Seller/login');
const addProduct = require('../controllers/ProductController/addProduct');
const deleteProduct = require('../controllers/ProductController/deleteProduct');
const updateProduct = require('../controllers/ProductController/updateProduct');
const showProduct = require('../controllers/ProductController/showProduct');

// Orders
const showOrder = require('../controllers/OrderController/showOrder');
const createOrder = require('../controllers/OrderController/createOrder');
const updateOrder = require('../controllers/OrderController/updateOrder');
const deleteOrder = require('../controllers/OrderController/deleteOrder');
const cancelOrder = require('../controllers/OrderController/cancelOrder');
const cancelledOrder = require('../controllers/OrderController/cancelledOrder');

// Middlewares
const isAdmin = require('../middlewares/isAdmin');
const isSeller = require('../middlewares/isSeller');
const isAuthenticated = require('../middlewares/isAuthenticated');

// User Routes
// router.get('/', homeController);
router.post('/register', register);
router.post('/login', login);

// Seller Routes
router.post('/registerseller', registerSeller);
router.post('/sellerlogin', loginSeller);
router.post('/addProduct', addProduct);
router.get('/showproducts', showProduct);
router.get('/delete', deleteProduct);
router.post('/update', updateProduct);

// Order Routes
router.get('/orders', showOrder);
router.post('/placeorder', createOrder);
router.post('/updateorder', updateOrder);
router.get('/deleteorder', deleteOrder);
router.put('/cancelorder', cancelOrder); // soft delete
router.get('/cancelledOrder', cancelledOrder);

module.exports = router;