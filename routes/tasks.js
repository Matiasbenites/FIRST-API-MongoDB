const express = require("express");
const taskRoutes = express.Router();
const taskModel = require("../schemas/tasks");

// Default route for find all tasks
taskRoutes.get("/", (req, res) => {
  taskModel.find({}, (err, data) => {
    if (err) {
      res.json({ status: 500, data: err });
    }
    res.json({ status: 200, data });
  });
});

// Default route for find a specific task
taskRoutes.get("/:id", (req, res) => {
  taskModel.find({ id: req.params.id }, (err, data) => {
    if (err) {
      res.json({ status: 500, data: err });
    }
    res.json({ status: 200, data });
  });
});

// Default route for create a new task
taskRoutes.post("/create", (req, res) => {
  console.log("El body es:", req.body);

  const task = new taskModel(req.body);

  task
    .save()
    .then((doc) => {
      res.json({ status: 200, data: doc });
    })
    .catch((err) => {
      res.json({ status: 200, data: err });
    });

  res.json({ status: 200, data: {} });
});

// Default route for update a specific task

taskRoutes.put("/:id", (req, res) => {
  taskModel.findOneAndUpdate(
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

//Default route for delete a task

taskRoutes.delete("/:id", (req, res) => {
  taskModel.findOneAndDelete({ id: req.params.id }, {}, (err, data) => {
    if (err) {
      res.json({ status: 500, data: err });
    }
    res.json({ status: 200, data });
  });
});

module.exports = taskRoutes;
