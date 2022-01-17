const Mongoose = require("mongoose");

// Creating a schema
const userInfoSchema = new Mongoose.Schema({
  name: { type: "String" },
  email: { type: "String" },
});

const movieWishlistSchema = new Mongoose.Schema({
  moviename: { type: "String" },
  category: { type: "String" },
});

const movieListSchema = new Mongoose.Schema({
  english: [
    {
      _id: { type: Number },
      name: { type: "String" },
    },
  ],
  tamil: [
    {
      _id: { type: Number },
      name: { type: "String" },
    },
  ],
  hindi: [
    {
      _id: { type: Number },
      name: { type: "String" },
    },
  ],
});

// Creating a model objects
const User = Mongoose.model("user", userInfoSchema);
const Moviewishlist = Mongoose.model("wishlist", movieWishlistSchema);
const Movielists = Mongoose.model("Movies", movieListSchema);

// Creating array of user data object
const userData = [
  {
    name: "Arun",
    email: "ak@gmail.com",
  },
  {
    name: "John",
    email: "john@gmail.com",
  },
];

// Creating array of wishlist data object
const wishlistData = [
  {
    moviename: "War",
    category: "Hindi",
  },
  {
    moviename: "Master",
    category: "Tamil",
  },
  {
    moviename: "Avatar",
    category: "English",
  },
];

// Creating array of movies data object
const movieListData = [
  {
    english: [
      {
        _id: 101,
        name: "Avengers",
      },
      {
        _id: 102,
        name: "Spiderman",
      },
    ],
    tamil: [
      {
        _id: 201,
        name: "Master",
      },
      {
        _id: 202,
        name: "Jai bhim",
      },
    ],
    hindi: [
      {
        _id: 301,
        name: "Dhoom",
      },
      {
        _id: 302,
        name: "Commando",
      },
    ],
  },
];

// Inserting user data
User.insertMany(userData)
  .then((data) => {
    console.log("userData saved successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// Inserting wishlist Data
Moviewishlist.insertMany(wishlistData)
  .then((data) => {
    console.log("wishlistData saved successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// Inserting wishlist Data
Movielists.insertMany(movieListData)
  .then((data) => {
    console.log("movieListData saved successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const initConnection = async () => {
  await Mongoose.connect("mongodb://localhost/Netflix-db");
};

initConnection();
