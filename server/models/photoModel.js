const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  local: {type: String},
  category:{ type: String, enum: ['urbano', 'Natureza', 'sla'], default: 'sla'},
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Photo", photoSchema);
