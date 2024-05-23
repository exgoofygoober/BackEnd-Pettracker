// models/Data.js

const mongoose = require("mongoose");

const loraSchema = new mongoose.Schema(
  {
    loraData: {
      type: String,
    },
    gps: {
      type: String,
    },
    rssiString: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
   
const Lora = mongoose.model("Lora", loraSchema);

module.exports = Lora;
