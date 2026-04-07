const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/addUser", async (req, res) => {

    try {

        const user = new User(req.body);
        await user.save();

        res.json({ message: "User added" });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }
});

router.get("/users", async (req, res) => {

    const users = await User.find();
    res.json(users);
});

module.exports = router;