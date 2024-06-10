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
router.get("/limitLora", async (req, res) => {
  try {
    let limit = req.query.limit ? parseInt(req.query.limit) : null; 
    let query = {};

    if (limit !== null) {
      query = Lora.find({}).sort({ createdAt: -1 }).limit(limit);
    } else {
      query = Lora.find({}).sort({ createdAt: -1 });
    }

    const data = await query;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data LoRa" });
  }
});
router.get("/pageLora", async (req, res) => {
  try {
    let limit = req.query.limit ? parseInt(req.query.limit) : 1;
    let page = req.query.page ? parseInt(req.query.page) : 0;

    const offset = page * limit;

    const data = await Lora.find({})
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengambil data LoRa" })
  }});
      module.exports = router;
  
