const router = require("express").Router();
const controller = require('../controllers/index')


router.post('/createProduct',controller.createProduct)
router.post('/getAllProducts',controller.getProducts)

module.exports = router