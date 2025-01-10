// init express
const express = require("express");
const app = express();

// server listening
app.listen(3000, () => {
  console.log("Server listening at http://localhost:3000");
});
