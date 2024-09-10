const mongoose = require("mongoose");
require("dotenv").config();

const PASSWORD = process.env.PASSWORD;

const uri = `mongodb+srv://as73881:${PASSWORD}@cluster0.8q4vi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

function dbConnection() {
  mongoose
    .connect(uri)
    .then((response) => {
      console.log("DB CONNECT SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
