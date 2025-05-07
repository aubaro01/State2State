const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const path = require('path');


app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const photoRoutes = require("./routes/photoRoute");

app.use("/api/photos", photoRoutes);

app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

module.exports = app;
