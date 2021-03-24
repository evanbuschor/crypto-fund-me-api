const express = require("express");
const router = express.Router();
const Goal = require("../models/Goal");

router.get("/", async (req, res) => {
  const goals = await Goal.find({});
  res.json(goals);
});

router.post("/", async (req, res) => {
  try {
    console.log("request ⭐", req.body);
    const { addr, title, amount, description } = req.body;
    const tempGoal = new Goal();
    tempGoal.bitcoinAddr = addr;
    tempGoal.title = title;
    tempGoal.goalAmount = amount;
    tempGoal.description = description;

    const saveResult = await tempGoal.save();
    res.send(saveResult);
  } catch (err) {
    console.log("error", err);
    res.send(`error`);
  }
});

module.exports = router;
