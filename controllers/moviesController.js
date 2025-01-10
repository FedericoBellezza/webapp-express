const connection = require("../db/conn");

// index
function index(req, res) {
  connection.query("SELECT * FROM movies", (err, result) => {
    console.log(result);
  });

  res.json({
    message: "index",
  });
}

module.exports = { index };
