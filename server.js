const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");
const logging = require("./middlewares/log");
const authentication = require("./middlewares/authentication");
const app = express();

app.use(express.json());
app.use(logging);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", authentication, userRoutes);

mongoose.connect =
  ("mongodb://127.0.0.1:27017/no-relational-api",
  (err) => {
    if (err) {
      console.log(
        "Se produjo un error al intentar conectarse a MongoDB 💥💥💥"
      );
    } else {
      console.log("Conectado a MongoDB 🍃🍃🍃 ");
    }
  });

app.listen(3000, "localhost", () => {
  console.log("Listening on localhost:3000 💫💫💫");
});
