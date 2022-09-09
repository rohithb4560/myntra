const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    productName: {
        type: String
    },
    productCategory: {
        type: String
    },
    productOriginalPrice: {
        type: Number
    },
    productDiscountPrice: {
        type: Number
    },
    productDetails:{
        type: String
    },
    productImages: [String],
    productColor: {
        type: String
    },
    productRating: {
        type: String
    },
    productReviews: {
        type: String
    }
})

module.exports.product = new mongoose.model("product", productSchema)