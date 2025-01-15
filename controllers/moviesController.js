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

// store review
function storeReview(req, res) {
  const movieId = req.params.id;
  const name = req.body.name;
  const vote = req.body.vote;
  const text = req.body.text;
  const sql = `
  INSERT INTO movies.reviews (movie_id, name, vote, text) VALUES (?,?,?,?)
  `;
  // get movie from id
  connection.query(sql, [movieId, name, vote, text], (err) => {
    // if error
    if (err) return res.status(500).json({ error: err });

    res.json("Review creata");
  });
}

// delete
function destroy(req, res) {
  // query preparation
  const deleteMovieFromID = "DELETE FROM movies.movies WHERE movies.id = ?";
  const id = req.params.id;

  // delete movie from id
  connection.query(deleteMovieFromID, [id], (err, result) => {
    // if error
    if (err) return res.status(500).json({ error: err });
    res.json(`Eliminato il film con id ${id}`);
  });
}

module.exports = { index, show, destroy, storeReview };
