const express = require("express");
const { getUsers, getUser, addUser, updateUser } = require("../Controller/app");
const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/add", addUser);
router.put("/update/:id", updateUser);

module.exports = router;
