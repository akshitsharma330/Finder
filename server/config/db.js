const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/finder")
  .then((conn) => {
    console.log("--DB connnected--");
  })
  .catch((err) => {
    console.log("--Error Occured--", err);
  });
