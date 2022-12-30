const express = require("express");
const userRoutes = express.Router();


// Default route for find all users
userRoutes.get("/", (req, res) => {
  // const data = 

  res.json({ status: 200, data: {} });
});


// Default route for find a specific user
// userRoutes.get("/:id", (req, res) => {
//   const data = 

//   res.json({ status: 200, data: {} });
// });


// Default route for create a new user
// userRoutes.post("/create", (req, res) => {
//   const data = 

//   res.json({ status: 200, data: {} });
// });


// Default route for update a specific user
module.exports = userRoutes;