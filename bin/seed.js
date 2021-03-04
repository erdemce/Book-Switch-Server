require('../db/index.js');

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let UserModel = require('../models/User.model')
let BookModel = require('../models/Book.model')
let salt = bcrypt.genSaltSync(10);

let hash1 = bcrypt.hashSync("Test123*", salt);
let hash2 = bcrypt.hashSync("Test123*", salt);
let hash3 = bcrypt.hashSync("Test123*", salt);
let hash4 = bcrypt.hashSync("Test123*", salt);
let hash5 = bcrypt.hashSync("Test123*", salt);
let hash6 = bcrypt.hashSync("Test123*", salt);

UserModel.create([{
            username: "ArSmith",
            name: "Arthur",
            lastName: "Simith",
            email: "arthur@berlin.com",
            password: hash1,
            city: "Berlin"
        },
        {
          username: "JWall",
          name: "Jenny",
            lastName: "Wall",
            email: "jenny@berlin.com",
            password: hash2,
            city: "Berlin"
        },
        {
          username: "Ross",
          name: "David",
            lastName: "Schneider",
            email: "david@paris.com",
            password: hash3,
            city: "Paris"
        },
        {
          username: "BlackWoman",
          name: "Mary",
            lastName: "Black",
            email: "mary@paris.com",
            password: hash4,
            city: "Paris"
        },
        {
          username: "JuliaB",
          name: "Julia",
            lastName: "Bauer",
            email: "julia@frankfurt.com",
            password: hash5,
            city: "Frankfurt"
        },
        {
          username: "JonBlack",
          name: "Jonas",
            lastName: "Schwarz",
            email: "jonas@frankfurt.com",
            password: hash6,
            city: "Frankfurt"
        }
    ])
    .then((users) => {
        console.log('Users seeded', users.length)
        const books = [{
                owner: users[0]._id,
                author: "J.K. Rowling",
                title: 'Harry Potter and the philosophal stone',
                description: 'book with basket',
                photo: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
                category: 'Fantasy',
                switchMode: 'switch'
            },
            {
              owner: users[1]._id,
              author: "J.K. Rowling",
              title: 'Harry Potter and the philosophal stone',
              description: 'book with basket',
              photo: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
              category: 'Fantasy',
              switchMode: 'switch'
            },
            {
              owner: users[2]._id,
              author: "J.K. Rowling",
              title: 'Harry Potter and the philosophal stone',
              description: 'book with basket',
              photo: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
              category: 'Fantasy',
              switchMode: 'switch'
            },
            {
              owner: users[3]._id,
              author: "J.K. Rowling",
              title: 'Harry Potter and the philosophal stone',
              description: 'book with basket',
              photo: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
              category: 'Fantasy',
              switchMode: 'switch'
            },
            {
              owner: users[4]._id,
              author: "J.K. Rowling",
              title: 'Harry Potter and the philosophal stone',
              description: 'book with basket',
              photo: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
              category: 'Fantasy',
              switchMode: 'switch'
            },
            {
              owner: users[5]._id,
                author: "J.K. Rowling",
                title: 'Harry Potter and the philosophal stone',
                description: 'book with basket',
                photo: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
                category: 'Fantasy',
                switchMode: 'switch'
            },
            {
              owner: users[5]._id,
                author: "J.K. Rowling",
                title: 'Harry Potter and the philosophal stone',
                description: 'book with basket',
                photo: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
                category: 'Fantasy',
                switchMode: 'switch'
            },
            {
              owner: users[0]._id,
                author: "J.K. Rowling",
                title: 'Harry Potter and the philosophal stone',
                description: 'book with basket',
                photo: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
                category: 'Fantasy',
                switchMode: 'switch'
            },
            {
              owner: users[1]._id,
                author: "J.K. Rowling",
                title: 'Harry Potter and the philosophal stone',
                description: 'book with basket',
                photo: "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
                category: 'Fantasy',
                switchMode: 'switch'
            }
        ]
        BookModel.insertMany(books)
            .then((result) => {
                console.log('Books seeded', result.length)
                mongoose.disconnect()
            })
            .catch((err) => {
                console.log(err)
            })
    })
    .catch((err) => {
        console.log(err)
    })