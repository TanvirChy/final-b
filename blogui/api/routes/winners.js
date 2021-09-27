const router = require("express").Router();
const Winner = require("../models/Winner");

//CREATE POST
router.post("/", async (req, res) => {
  const newWinner = new Winner(req.body);
  try {
    const savedWinner = await newWinner.save();
    res.status(200).json(savedWinner);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    winners = await Winner.find();

    res.status(200).json(winners);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
