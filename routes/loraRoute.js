// routes/lora.js

const express = require("express");
const router = express.Router();
const Lora = require("../models/dbLora"); 

router.post("/kirimLora", async (req, res) => {
  try {
    const { loraData, gps, rssiString } = req.body;

    const newData = new Lora({
      loraData,
      gps,
      rssiString,
    });

    await newData.save();

    res.status(200).json({ message: "Data LoRa berhasil disimpan" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menyimpan data LoRa" });
  }
});

router.get("/dataLora", async (req, res) => { 
  try {
    const data = await Lora.find({}).sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data LoRa" });
  }
});

module.exports = router;
