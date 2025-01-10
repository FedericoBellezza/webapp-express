const connection = require("../db/conn");

// index
function index(req, res) {
  connection.query("SELECT * FROM movies", (err, result) => {
    // if error
    console.log(err);
    if (err) return res.status(500).json({ error: "Database query failed" });

    res.json(result);
  });
}

// show
function show(req, res) {
  // query preparation
  getMovieFromID = "SELECT * FROM movies WHERE id = ?";
  getReviewsFromID = "SELECT * FROM movies.reviews WHERE movie_id = ?";
  id = req.params.id;
  finalRes = [];

  // get movie from id
  connection.query(getMovieFromID, [id], (err, result) => {
    // if error
    console.log(err);
    if (err) return res.status(500).json({ error: "Database query failed" });

    finalRes.push({ movie: result });
  });

  // get reviews from id
  connection.query(getReviewsFromID, [id], (err, result) => {
    // if error
    console.log(err);
    if (err) return res.status(500).json({ error: "Database query failed" });

    finalRes.push({ reviews: result });
    res.json(finalRes);
    console.log(finalRes);
  });
}

module.exports = { index, show };
