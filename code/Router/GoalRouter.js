const express = require("express");
const router = express.Router();
const goalModel = require("../Model/GoalModel");
const authmiddleware = require("../Middlewares/authMiddleware");

// Create Goal
router.post("/create", authmiddleware, async (req, res, next) => {
  try {
    const { title } = req.body;

    const goal = new goalModel({
      title,
      user: req.user,
    });

    await goal.save();

    res.status(200).json({
      success: true,
      data: goal,
    });
  } catch (err) {
    next(err);
  }
});

// Get Goal by ID
router.get("/:id", authmiddleware, async (req, res, next) => {
  try {
    const data = await goalModel.findOne({
      _id: req.params.id,
      user: req.user,
    });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
});

// Update Goal
router.put("/:id", authmiddleware, async (req, res, next) => {
  try {
    const goal = await goalModel.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      { completed: req.body.completed },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Goal updated",
      data: goal,
    });
  } catch (error) {
    next(error);
  }
});

// Delete Goal
router.delete("/:id", authmiddleware, async (req, res, next) => {
  try {
    await goalModel.findOneAndDelete({
      _id: req.params.id,
      user: req.user,
    });

    res.status(200).json({
      success: true,
      message: "Goal deleted",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;