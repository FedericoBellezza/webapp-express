const express = require("express");
const router = express.Router();

// import from controllers
const moviesController = require("../controllers/moviesController");
router.get("/", moviesController.index);

// router export
module.exports = router;
