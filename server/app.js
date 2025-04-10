const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const authRoutes = require("./routes/authRoute");
const photoRoutes = require("./routes/photoRoute");

app.use("/api/auth", authRoutes);
app.use("/api/photos", photoRoutes);

module.exports = app;
