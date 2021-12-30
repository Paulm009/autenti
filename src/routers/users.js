const controller = require("../controllers/users.js");
const router = require("express").Router();

router.get("/", controller.getData);
router.post("/login", controller.login);
router.post("/signup", controller.signup);

module.exports = router;
