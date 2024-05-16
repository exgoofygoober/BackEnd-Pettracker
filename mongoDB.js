const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

var mongoURL =
  "mongodb+srv://pettracker:gtyu12345@pettracker.p2wjz7i.mongodb.net/lora";

mongoose.connect(mongoURL);

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Success");
});

module.exports = mongoose;
