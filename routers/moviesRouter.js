const express = require("express");
const router = express.Router();

// import from controllers
const moviesController = require("../controllers/moviesController");
router.get("/", moviesController.index);
router.get("/:id", moviesController.show);
router.delete("/:id", moviesController.destroy);

// router export
module.exports = router;
