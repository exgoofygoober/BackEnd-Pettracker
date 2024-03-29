// models/Data.js

const mongoose = require("mongoose");

const loraSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true,
    },
    LoRaData: {
      type: String,
      required: true,
    },
    rssiString: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Lora = mongoose.model("Lora", loraSchema);

module.exports = Lora;
