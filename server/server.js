const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then((conn) => {
  console.log("Connected to MongoDB");
});

const app = require("./app");


const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});