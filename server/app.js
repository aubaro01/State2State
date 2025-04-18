const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const photoRoutes = require("./routes/photoRoute");

app.use("/api/photos", photoRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'State2state api online :))))!!' });
}); 

module.exports = app;
