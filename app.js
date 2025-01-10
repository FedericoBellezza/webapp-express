// init express
const express = require("express");
const app = express();

// import env
const { APP_HOST, APP_PORT } = process.env;

// register middlewares
app.use(express.static("public"));
app.use(express.json());

// routes
const moviesRouter = require("./routers/moviesRouter");
app.use("/movies", moviesRouter);

// error handler

// server listening
app.listen(APP_PORT, () => {
  console.log(`Server listening at ${APP_HOST}:${APP_PORT}`);
});
