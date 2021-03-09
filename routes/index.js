const { Router } = require("express");
const petsRouter = require("./petsRoutes");
const usersRouter = require("./usersRoutes");

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", usersRouter);
router.use("/pets", petsRouter);

module.exports = router;
