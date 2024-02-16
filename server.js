const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/netflix", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("server started on port 5000");
});
