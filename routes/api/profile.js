const express = require("express");
const router = express.Router();

//@routes GET api/profile/test
//desc test profile routes
//@access public
router.get("/test", (req, res) => {
  res.json({ msg: "profile Works" });
});

module.exports = router;
