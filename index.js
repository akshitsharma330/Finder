const express = require("express");
const app = express();
const userRoutes = require("./server/routes/userroutes");
const adminroutes = require('./server/routes/userroutes')


const db = require("./server/config/db");
// to handle the request body parse into post method
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("test");
});
app.use("/user", userRoutes);


app.use('/admin',adminroutes)


const seed = require('./server/config/seed')
seed.insertUser()


app.listen(8080, () => {
  console.log("server is running on port 8080");
});
           