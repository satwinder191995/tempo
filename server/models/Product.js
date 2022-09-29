const mongoose = require('mongoose');
var uuidv4 = require('uuid4');
const { Schema } = mongoose;

const productSchema = new Schema({
  productId:{
    type:String,
    default:uuidv4, 
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  author:{
  type:String,
  trim:true
  },
  image: {
    type: String
  },
  listPrice:Number,
  beforePrice:Number,
  afterPrice:Number
  ,
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  type:String,
  // type:[
  //   {
  //     name:String,
  //     quantity:Number
  //   }
  // ],
  tags:[String]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
