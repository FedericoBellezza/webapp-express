const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "ROTTE DEI FILM",
  });
});

// router export
module.exports = router;
