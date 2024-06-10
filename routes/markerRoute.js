const express = require("express");
const router = express.Router();
const Marker = require("../models/markerBlue");

router.post("/addMarkers", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    const newMarker = new Marker({
      latitude,
      longitude,
    });

    await newMarker.save();

    res.status(200).json({ message: "Marker berhasil disimpan" });
  } catch (error) {
    console.error("Gagal menyimpan marker:", error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan dalam menyimpan marker" });
  }
});

router.get("/getMarkers", async (req, res) => {
  try {
    const markers = await Marker.find({});
    res.status(200).json(markers);
  } catch (error) {
    console.error("Gagal mengambil marker:", error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan dalam mengambil marker" });
  }
});

router.get("/getLatestMarker", async (req, res) => {
  try {
    const latestMarker = await Marker.findOne({}).sort({ createdAt: -1 });
    res.status(200).json(latestMarker);
  } catch (error) {
    console.error("Gagal mengambil marker terbaru:", error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan dalam mengambil marker terbaru" });
  }
});

module.exports = router;
