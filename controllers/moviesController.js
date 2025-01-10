const connection = require("../db/conn");

// index
function index(req, res) {
  connection.query("SELECT * FROM movies", (err, result) => {
    // if error
    if (err) return res.status(500).json({ error: "Database query failed" });

    res.json(result);
  });
}

// show
function show(req, res) {
  // query preparation
  const getMovieFromID = "SELECT * FROM movies WHERE id = ?";
  const getReviewsFromID = "SELECT * FROM movies.reviews WHERE movie_id = ?";
  const id = req.params.id;
  let finalRes = {};

  // get movie from id
  connection.query(getMovieFromID, [id], (err, result) => {
    // if error
    if (err) return res.status(500).json({ error: err });

    finalRes = { movie: result };
  });

  // get reviews from id
  connection.query(getReviewsFromID, [id], (err, result) => {
    // if error
    if (err) return res.status(500).json({ error: err });

    finalRes.reviews = result;

    res.json(finalRes);
  });
}

// delete
function destroy(req, res) {
  // query preparation
  const deleteMovieFromID = "DELETE FROM `movies`.`movies` WHERE `id` = ?";
  const id = req.params.id;

  // get movie from id
  connection.query(deleteMovieFromID, [id], (err, result) => {
    // if error
    if (err) return res.status(500).json({ error: err });
    res.json(result);
  });
}

module.exports = { index, show, destroy };
