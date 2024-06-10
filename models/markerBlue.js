// models/Marker.js

const mongoose = require("mongoose");

const markerSchema = new mongoose.Schema(
  {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Marker = mongoose.model("Marker", markerSchema);

module.exports = Marker;
