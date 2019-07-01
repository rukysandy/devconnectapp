const express = require("express");
const router = express.Router();

//@routes GET api/post/test
//desc test post routes
//@access public
router.get("/test", (req, res) => {
  res.json({ msg: "post Works" });
});

module.exports = router;
