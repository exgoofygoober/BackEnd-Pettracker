const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    status_pintu: String,
    teks_asli: String,
    teks_dekripsi: String,
    riwayat_pin: String,
    encryptedText: String,
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
