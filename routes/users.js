const express = require("express");
const userRoutes = express.Router();
const userModel = require("../schemas/users");

// Default route for find all users
userRoutes.get("/", (req, res) => {
  userModel.find({}, (err, data) => {
    if (err) {
      res.json({ status: 500, data: err });
    }
    res.json({ status: 200, data });
  });
});

// Default route for find a specific user
userRoutes.get("/:id", (req, res) => {
  userModel.find({ id: req.params.id }, (err, data) => {
    if (err) {
      res.json({ status: 500, data: err });
    }
    res.json({ status: 200, data });
  });
});

// Default route for create a new user
userRoutes.post("/create", (req, res) => {
  console.log("El body es:", req.body);

  const user = new userModel(req.body);

  user
    .save()
    .then((doc) => {
      res.json({ status: 200, data: doc });
    })
    .catch((err) => {
      res.json({ status: 200, data: err });
    });

  res.json({ status: 200, data: {} });
});

// Default route for update a specific user

userRoutes.put("/:id", (req, res) => {
  userModel.findOneAndUpdate(
    { id: req.params.id },
    req.body,
    { new: true },
    (err, data) => {
      if (err) {
        res.json({ status: 500, data: err });
      }
      res.json({ status: 200, data });
    }
  );
});

//Default route for delete an user

userRoutes.delete("/:id", (req, res) => {
  userModel.findOneAndDelete({ id: req.params.id }, {}, (err, data) => {
    if (err) {
      res.json({ status: 500, data: err });
    }
    res.json({ status: 200, data });
  });
});

module.exports = userRoutes;
