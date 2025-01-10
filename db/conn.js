const mysql = require("mysql2");

const connection = mysql.createConnection({
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

module.exports = connection;
