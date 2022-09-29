const { AuthenticationError } = require('apollo-server-express');
const { Product, Category, User,Order,OrderProducts } = require('../models');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');
const stripe = require('stripe')('sk_test_51LiXPnHhrCidenvbhh9SodWKROj5AyXlioG3FwBmXPL8OQ3CHQ3yMrg6OijQsjkCYfSjfESNphfLjRqCLvK4zpiZ00wniHhzqg');
// Order
const {emailSent} = require('../utils/nodemailer');
const resolvers = {
    Query: {
        products: async() => {
            return Product.find();
        },
        product: async(parent, { productId }) => {
            return Product.findOne({ productId });
        },
        tags: async(parent, { tag }) => {
            return Product.find({tags:{$all:[tag]}})
        },
        sort: async(parent, { sortType }) => {
            return Product.find().sort({[sortType]:1}).limit(10);
        },
        search:async(parent,{searchData})=>{
            return Product.find({name:{$regex:new RegExp(searchData+'.*','i')}}).limit(10);
        },
        // orders: async() => {
        //     return Order.find();
        // },
        // order: async(parent, { purchaseDate }) => {
        //     return Order.findOne({ purchaseDate })
        //         .populate('products');
        // },
        categories: async() => {
            return Category.find();
        },
        category: async(parent, { name }) => {
            return Category.findOne({ name });
        },
        users: async() => {
            return User.find()
                .select('-__v -password')
                // .populate('orders');
        },
        user: async(parent, { email }) => {
            return User.findOne({ email })
                .select('-__v -password')
                // .populate('orders');
        },
       
        me: async(parent, args, context) => {
            console.log(context.user)
            const {email}=context.user;
            console.log(email);
            if (context.user) {
                const userData = await User.findOne({ email })
                    .select('-__v -password')
                    .populate('deliveryAddress')
                    .populate('orders');

                return userData;
            }
        },

            // throw new AuthenticationError('Not logged in');
        // },    checkout: async (parent, args, context) => {
           
            // const url = new URL(context.headers.referer).origin;
            // const order = new Order({ products: args.products });
            // const line_items = [];
      
            // const { products } = await order.populate('products');
      
            // for (let i = 0; i < products.length; i++) {
            //   const product = await stripe.products.create({
            //     name:"Kitchen",
                // description: "Due Amount",
            //   });
      
            //   const price = await stripe.prices.create({
            //     product: 123,
                // product:"Total",
            //     unit_amount: args.products * 100,
            //     currency: 'usd',
            //   });
      
            //   line_items.push({
            //     price: price.id,
            //     quantity: 1
            //   });
            // }
      
            // const session = await stripe.checkout.sessions.create({
            //   payment_method_types: ['card'],
            //   line_items,
            //   mode: 'payment',
            //   success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
            //   cancel_url: `${url}/`
            // });
      
            // return { session: session.id };
        //   }
    },
    Mutation: {
        newUser: async(parent, args) => {
            console.log(args);
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async(parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Your credentials are incorrect');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Your credentials are incorrect');
            }

            const token = signToken(user);
            return { token, user };
        },
        addressUpdate: async(parent,args,context) =>{
            console.log(args)
            const {email}= context.user;
            console.log(email);
            const user = await User.findOne({ email });
            const userId = user._id.valueOf();
            console.log(userId)
            await User.findByIdAndUpdate(userId, { $set: { deliveryAddress: args } });
        },
        userUpdate: async(parent,{amount},context) =>{
            console.log(amount);
            const {email}= context.user;
            console.log(email);
            // const user = await User.findOne({ email });
            // const userId = user._id.valueOf();
            // console.log(userId)
            const saltRounds = 10;
            passwordData = await bcrypt.hash(args.password, saltRounds);
            console.log(passwordData)
            const user = await User.findOneAndUpdate({email},{userName:args.userName,password:passwordData});
            const token = signToken(user);
            return { token, user };
        }, 
        checkout:async (parent,args,context) => {
            
            const amount =parseInt(args.amount*100);
            console.log(amount);
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: "cad",
                automatic_payment_methods: {
                  enabled: true,
                },
              });
              return {clientSecret:paymentIntent.client_secret}
        },
        // addOrder: async(parent, { products, purchaseDate, deliveryAddress }, context) => {
        //     if (context.user) {
        //         const order = new Order({ products, purchaseDate, deliveryAddress });

        //         await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        //         return order;
        //     }

        //     throw new AuthenticationError('Not logged in');
        // },
        order: async(parent,{order},context) => {
            if (context.user) {
            const data = JSON.parse(order);
            const {email}= context.user;
            const user = await User.findOne({email} );
            const userId = user._id.valueOf();
            const customer = {
                name:user.userName,
                email:user.email,
            }
            const[cart,totalSummary]=data;
            const datas = cart.cart;
            const total = totalSummary.totalSummary
            console.log(total);
            const orderData = new Order({customerInfo:customer,purchaseProd:datas,paymentSummary:total});
            // console.log(orderData)
            const userData = await User.findOneAndUpdate(user._id, { $push: { orders: orderData } });
            // console.log(userData);
            console.log("sunny")
            emailSent();
            console.log("sunny")
            orderData.save();
        }
        throw new AuthenticationError('Not logged in');
        },
    }
};

module.exports = resolvers;