const { Router } = require("express");
const petsRouter = require("./pets");
const usersRouter = require("./users");

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", usersRouter);
router.use("/pets", petsRouter);

module.exports = router;
