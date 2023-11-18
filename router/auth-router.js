const express = require("express");
const router = express.Router();
const {home , anotherway , register} = require('../controllers/auth-controller')

router.get("/" , home )
// router.route("/").get(home);


// another way to write a router code
router.route("/anotherway").get(anotherway)


router.route("/register").post(register)

module.exports = router ;