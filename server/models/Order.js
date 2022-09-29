const mongoose = require('mongoose');
const OrderProducts = require("./OrderProducts");
const { Schema } = mongoose;
var uuidv4 = require('uuid4');
const orderSchema = new Schema({
    OrderId:{
        type:String,
        default:uuidv4, 
      },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    customerInfo:{
     name:String,
     email:String,
    //  deliveryAdress:[String],
    },
    paymentSummary:{
    subtotal:Number,
    shipping:Number,
    tax:Number,
    grandTotal:Number
    },
    purchaseProd:[ {
        productId:String,
        image:String,
        prodType:String,
        name:String,
        quantityOrder:Number,
        priceOrdered:Number
    }],

});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;