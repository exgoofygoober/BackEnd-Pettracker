// routes/lora.js

const express = require("express");
const router = express.Router();
const Lora = require("../models/dbLora"); 

router.post("/kirimLora", async (req, res) => {
  try {
    const { status, LoRaData, rssiString } = req.body;

    const newData = new Lora({
      status,
      LoRaData,
      rssiString,
    });

    await newData.save();

    res.status(201).json({ message: "Data LoRa berhasil disimpan" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menyimpan data LoRa" });
  }
});

router.get("/dataLora", async (req, res) => {
  try {
    const data = await Lora.find(); 
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data LoRa" });
  }
});

module.exports = router;
