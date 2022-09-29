const mongoose = require('mongoose');

const { Schema } = mongoose;
// const bcrypt = require('bcrypt');
const Order = require('./Order');

const addressSchema = new Schema({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country:{
    type: String,
    required: true,
  }
});

// set up pre-save middleware to create password
// userSchema.pre('save', async function(next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function(password) {
//   return await bcrypt.compare(password, this.password);
// };

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
