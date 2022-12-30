const express = require("express");
const apiRoutes = require("./routes/index");
const logging = require("./middlewares/log");
const authentication = require("./middlewares/authentication");
const app = express();

app.use(express.json());
app.use(logging);

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", authentication, apiRoutes);

app.listen(3000, "localhost", () => {
  console.log("Listening on localhost:3000 💫💫💫");
});
