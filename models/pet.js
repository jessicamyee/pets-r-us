const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Pet = new Schema(
  {
    name: { type: String, required: true },
    breed: { type: String, required: true },
    age: { type: String, required: true },
    price: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    imgURL: { type: String, required: true },
    type: { type: String, required: true },
    gender: { type: String, required: true },

  },
  { timestamps: true }
);

module.exports = mongoose.model("pets", Pet);
