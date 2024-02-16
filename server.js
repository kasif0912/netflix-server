const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const ATPORT = process.env.PORT || 5000;
const listEndpoints = require('express-list-endpoints')
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL, {
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
app.get('/', (req,res)=>{
  res.send(listEndpoints(app))  
})
app.listen(ATPORT, () => {
  console.log("server started on port ", ATPORT );

});
