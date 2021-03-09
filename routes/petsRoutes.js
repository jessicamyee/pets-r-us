const { Router } = require("express");
const controllers = require("../controllers/pets");
const restrict = require("../helpers/restrict");
const router = Router();

router.get("/", controllers.getPets);
router.get("/:id", controllers.getPet);
router.post("/", restrict, controllers.createPet);
router.put("/:id", restrict, controllers.editPet);
router.delete("/:id", restrict, controllers.deletePet);

module.exports = router;
