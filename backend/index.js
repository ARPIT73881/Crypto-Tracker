const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

const dbConnection = require("./dbConnection");

app.use(express.json());
app.use(cors());

app.use("/api/v1", require("./routes/routes"));

app.listen(port, () => {
  dbConnection();
  console.log("App is listening");
});
