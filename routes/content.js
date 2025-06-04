const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const Content = require("../models/Content");

router.post(
  "/write",
  asyncHandler(async (req, res) => {
    const { id, satisfaction, emotion, diary } = req.body;
    const content = Content.create({
      id: id,
      satisfaction: satisfaction,
      emotion: emotion,
      diary: diary,
    });
    res.json(`content created: ${content}`);
  })
);
router.get(
  "/content",
  asyncHandler(async (req, res) => {
    const data = await Content.find();
    res.json(data);
  })
);
module.exports = router;
