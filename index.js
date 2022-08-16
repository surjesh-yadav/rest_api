const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//connect to mongoDB atlas
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to Atlas");
  }) 
  .catch((err) => {
    console.log("Something wrong happened", err);
  });
app.listen(PORT, () => {
  console.log("server started at Port", PORT);
});
