const Pet = require("../models/pet");
const db = require("../db/connection");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await Pet.findById(id);
    if (pet) {
      return res.json(pet);
    }
    res.status(404).json({ message: "Pet not found!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const createPet = async (req, res) => {
  try {
    const pet = await new Pet(req.body);
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const editPet = async (req, res) => {
  const { id } = req.params;
  await Pet.findByIdAndUpdate(id, req.body, { new: true }, (error, pet) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    if (!pet) {
      return res.status(404).json({ message: "Pet not found!" });
    }
    res.status(200).json(pet);
  });
};
const deletePet = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pet.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Pet deleted");
    }
    throw new Error("Pet not found");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPet,
  getPets,
  getPet,
  editPet,
  deletePet,
};
