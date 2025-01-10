// init express
const express = require("express");
const app = express();

// import env
const { APP_HOST, APP_PORT } = process.env;

// public folder
app.use(express.static("public"));
app.use(express.json());

// routes
const moviesRouter = require("./routers/moviesRouter");
app.use("/movies", moviesRouter);

// error handlers
const notFound = require("./middlewares/notFound");
const errorsHandler = require("./middlewares/errorsHandler");
app.use(errorsHandler);
app.use(notFound);

// server listening
app.listen(APP_PORT, () => {
  console.log(`Server listening at ${APP_HOST}:${APP_PORT}`);
});
