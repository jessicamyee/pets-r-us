const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Pet = require("../models/pet");
const db = require("../db/connection");
db.on("error", console.error.bind(console, "MongoDB connection error:"));
const SALT_ROUNDS = 11;
const TOKEN_KEY = "iliketopetthegoodestpets";

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const password_digest = await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({
      username,
      email,
      password_digest,
    });
    await user.save();
    const payload = {
      username: user.username,
      email: user.email,
      _id: user._id,
    };
    const token = jwt.sign(payload, TOKEN_KEY);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (await bcrypt.compare(password, user.password_digest)) {
      const payload = {
        username: user.username,
        email: user.email,
        _id: user._id,
      };
      const token = jwt.sign(payload, TOKEN_KEY);
      res.status(201).json({ token });
    } else {
      res.status(401).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const verify = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, TOKEN_KEY);
    if (payload) {
      res.json(payload);
    }
  } catch (e) {
    res.status(401).send("Not Authorized");
  }
};

<<<<<<< HEAD
=======
const getUser = async (req, res) => {
  try {
    const users = await User.findById(req.params.id).populate("pets");
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const usersPets = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const pet = new Pet(req.body);
    pet.userId = user._id;
    await pet.save();
    user.pets.push(pet);
    await user.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

>>>>>>> f4ebbaa9b8b116fc532a995ca786e1646b67fbda
module.exports = {
  signUp,
  signIn,
  verify,
<<<<<<< HEAD
=======
  getUser,
  usersPets,
>>>>>>> f4ebbaa9b8b116fc532a995ca786e1646b67fbda
};
