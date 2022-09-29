const mongoose = require('mongoose');

const { Schema } = mongoose;
const Order = require('./Order');
const bcrypt = require('bcrypt');
const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  orders: [Order.schema],
  dateCreated: {
    type: Date,
    default: Date.now
},
  deliveryAddress:{
    apartment: {
      type: String,
    },
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    postal: {
      type: String,
    },
    province: {
      type: String,
    },
    country:{
      type: String,
    }

  }
  
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  console.log("not ");
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});


// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
