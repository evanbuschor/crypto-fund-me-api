const express = require("express");
const app = express();
const mongoose = require("mongoose");
const goalsRoute = require("./routes/goals");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;
const mongoDBConnection = process.env.MONGO_DB_CONNECTION_STRING;

app.use(cors(false));
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use("/goals", goalsRoute);

mongoose.connect(mongoDBConnection, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connectoin error"));
db.once("open", () => {
  console.log("db connected");
});

app.listen(port, () => {
  console.log(`api started listening on port ${port}`);
});
