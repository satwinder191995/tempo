// gql tagged template function
const { gql } = require('apollo-server-express');

//typeDefs
const typeDefs = gql `
    type Query {
        products: [Product]
        product (productId: String):Product
        tags(tag:String):[Product]
        sort(sortType:String):[Product]
        search(searchData:String):[Product]
        categories: [Category]
        category (name: String): Category
        users: [User]
        user (email: String): User
        me: User
    }
   

    type Mutation {
        login(email: String!, password: String!): Auth
        newUser(userName: String!, email: String!, password: String!): Auth 
        order(order:[String]):Order
        addressUpdate( apartment:String,street:String!,city:String!,postal:String!,country:String!,province:String!):Auth
        userUpdate( userName:String!,password:String!):Auth
        checkout(amount:Float!):checkoutData
    }

    type Auth {
        token: ID!
        user: User
    }
   type checkoutData{
    clientSecret:String
   }
    type Product {
        productId:String
        name: String
        author:String
        description: String
        image: String
        quantity: Int
        listPrice:Float
        beforePrice:Float
        afterPrice:Float
        type:String
    }
    type Order {
        _id:ID
        purchaseDate:String
        purchaseProd:[purchaseProd]
        paymentSummary:paymentSummary
    }
    type paymentSummary{
        grandTotal:Float
    }
    type purchaseProd{
        productId:String,
        image:String,
        type:String,
        name:String,
        quantityOrder:Float,
        priceOrdered:Float
    }

    type Category {
        name: String
        tag:String
    }
    type User {
        userName:String,
        email:String,
        deliveryAddress:diliveryAddress
        orders:[Order]
    }
    type diliveryAddress {
        apartment:String,
        street:String,
        city:String,
        postal:String,
        province:String,
        country:String
    }
`

;

module.exports = typeDefs;
// orders: [Order]
// order (purchaseDate: String): Order


// type Items {
//     name:String
//     price:Float
// }
// addOrder(products: [ID]!): Order
// type Checkout {
//     session: ID
//   }
// checkout(products: Int!): Checkout