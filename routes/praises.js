const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const praisesController = require("../controllers/praises");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, praisesController.getPraise);

router.get("/editPraise/:id", ensureAuth, praisesController.getEditPraise);

router.put("/:id", praisesController.editPraise);

router.post("/createPraise", upload.single("file"), praisesController.createPraise);

router.put("/likePraise/:id", praisesController.likePraise);

router.put("/pinPraise/:id", praisesController.pinPraise);

router.delete("/deletePraise/:id", praisesController.deletePraise);

module.exports = router;
