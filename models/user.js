const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
<<<<<<< HEAD
    petpost: [{ type: Schema.Types.ObjectId, ref: "pets" }],
=======
    pets: [{ type: Schema.Types.ObjectId, ref: "pets" }],
>>>>>>> f4ebbaa9b8b116fc532a995ca786e1646b67fbda
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
