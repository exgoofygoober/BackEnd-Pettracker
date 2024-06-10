const express = require("express");
const cors = require("cors");

const dbConfig = require("./mongoDB");

const loraRoute = require("./routes/loraRoute");
const markerRoute = require("./routes/markerRoute");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Server Jalan",
    message: "Server siap digunakan!",
  });
});

app.use("/lora", loraRoute);
app.use("/marker", markerRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Sensor is running on port", port));
