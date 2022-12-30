const express = require("express");
const rolRoutes = express.Router();
const rolModel = require("../schemas/roles");

// Default route for find all roles
rolRoutes.get("/", (req, res) => {
  rolModel.find({}, (err, data) => {
    if (err) {
      res.json({ status: 500, data: err });
    }
    res.json({ status: 200, data });
  });
});

// Default route for find a specific rol
rolRoutes.get("/:id", (req, res) => {
  rolModel.find({ id: req.params.id }, (err, data) => {
    if (err) {
      res.json({ status: 500, data: err });
    }
    res.json({ status: 200, data });
  });
});

// Default route for create a new rol
rolRoutes.post("/create", (req, res) => {
  console.log("El body es:", req.body);

  const rol = new rolModel(req.body);

  rol
    .save()
    .then((doc) => {
      res.json({ status: 200, data: doc });
    })
    .catch((err) => {
      res.json({ status: 200, data: err });
    });

  res.json({ status: 200, data: {} });
});

// Default route for update a specific rol

rolRoutes.put("/:id", (req, res) => {
  rolModel.findOneAndUpdate(
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

//Default route for delete a rol

rolRoutes.delete("/:id", (req, res) => {
  rolModel.findOneAndDelete({ id: req.params.id }, {}, (err, data) => {
    if (err) {
      res.json({ status: 500, data: err });
    }
    res.json({ status: 200, data });
  });
});

module.exports = rolRoutes;
