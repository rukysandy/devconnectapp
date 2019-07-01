const express = require("express");
const router = express.Router();

//@routes GET api/users/test
//desc test users routes
//@access public
router.get("/test", (req, res) => {
  res.json({ msg: "users Works" });
});

module.exports = router;
