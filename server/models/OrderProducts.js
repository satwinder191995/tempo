const mongoose = require('mongoose');
const { Schema } = mongoose;
const orderProducts = new Schema({
    productId:String,
    image:String,
    type:String,
    name:String,
    quantityOrder:Number,
    priceOrdered:Number

});

const OrderProducts = mongoose.model('OrderProducts', orderProducts);

module.exports = OrderProducts;