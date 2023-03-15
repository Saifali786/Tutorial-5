const express = require("express");
const userController = require("../Controller/userController");
const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUser);
router.post("/add", userController.addUser);
router.put("/update/:id", userController.updateUser);

module.exports = router;
